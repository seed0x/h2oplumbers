# Vercel Environment Variables - Final Checklist

## ✅ Already Added (9 variables)
1. EMAIL_FROM
2. NOTIFICATION_EMAIL  
3. FROM_EMAIL
4. CONTACT_EMAIL
5. PRISMA_ACCELERATE_URL
6. RESEND_API_KEY
7. DATABASE_POSTGRES_URL
8. DATABASE_PRISMA_DATABASE_URL
9. DATABASE_URL

## 🆕 Need to Add (2 variables)

### 1. Google Analytics 4
**Variable Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`  
**Value:** `G-G4N95KVWB8`  
**Scope:** Production, Preview, Development

### 2. Site URL
**Variable Name:** `NEXT_PUBLIC_SITE_URL`  
**Value:** `https://h2oplumbers.com`  
**Scope:** Production, Preview, Development

## 📋 How to Add in Vercel

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable:
   - Click "Add New"
   - Enter variable name
   - Enter value
   - Select all environments (Production, Preview, Development)
   - Click "Save"

## ✅ Already in Code
- Google Search Console verification meta tag (added to layout.tsx)
- GA4 tracking component (already configured, just needs env var)
- All redirects (40+) in next.config.js
- LocalBusiness schema enabled
- Sitemap configured
- robots.txt updated

## 🚀 After Adding These 2 Variables

You're ready to deploy! Just:
1. Commit and push changes to GitHub
2. Vercel will auto-deploy
3. Test the staging URL
4. Point DNS to Vercel
5. You're live! 🎉
