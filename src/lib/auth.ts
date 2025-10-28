import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './prisma'
import { UserRole } from '@prisma/client'
import type { Adapter } from 'next-auth/adapters'

export const authOptions: NextAuthOptions = {
  adapter: process.env.DATABASE_URL ? PrismaAdapter(prisma) as Adapter : undefined,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      if ((user || trigger === 'update') && process.env.DATABASE_URL) {
        try {
          // Fetch user from database to get role
          const dbUser = await prisma.user.findUnique({
            where: { email: token.email! },
          })
          token.role = dbUser?.role || UserRole.USER
        } catch (error) {
          console.warn('Database not available during build, using default role')
          token.role = UserRole.USER
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!
        session.user.role = token.role
      }
      return session
    },
    async signIn({ user, account, profile }) {
      // Allow only specific admin emails
      const adminEmails = [
        process.env.ADMIN_EMAIL,
        'admin@h2oplumbers.com',
        // Add other admin emails here
      ].filter(Boolean)
      
      const isAdmin = adminEmails.includes(user.email!)
      
      // Set admin role for admin emails (only if database is available)
      if (isAdmin && process.env.DATABASE_URL) {
        try {
          await prisma.user.upsert({
            where: { email: user.email! },
            update: { role: UserRole.ADMIN },
            create: {
              email: user.email!,
              name: user.name,
              role: UserRole.ADMIN,
            },
          })
        } catch (error) {
          console.warn('Database not available during build, skipping user creation')
        }
      }
      
      return isAdmin || !process.env.RESTRICT_ADMIN_ACCESS
    },
  },
  pages: {
    signIn: '/admin/auth/signin',
    error: '/admin/auth/error',
  },
}


