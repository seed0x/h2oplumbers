import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create a mock Prisma client for when DATABASE_URL is not available
const createMockPrismaClient = () => {
  const mockClient = {} as PrismaClient
  // Add mock methods for any Prisma operations used during build
  return mockClient
}

export const prisma =
  globalForPrisma.prisma ??
  (process.env.DATABASE_URL 
    ? new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query'] : [],
      })
    : createMockPrismaClient())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
