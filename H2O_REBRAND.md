# H2O Plumbing Services - Rebranded from All County Plumbers

This repository has been rebranded from All County Plumbers to H2O Plumbing Services.

## What Was Changed

### 1. Brand Identity
- **Colors**: Changed from red/navy to blue/cyan theme
  - Primary: Sky blue (#0ea5e9)
  - Secondary: Cyan (#06b6d4)
  - Updated in `src/config/brand-colors.ts`

### 2. Business Information
- **Company Name**: H2O Plumbing Services
- **Phone**: (360) 433-9748
- **Website**: https://h2oplumbers.com
- **Email**: info@h2oplumbers.com
- **Service Area**: Vancouver, WA and Clark County (reduced from All County's broader area)
- **Updated in**: `src/lib/business-data.ts`

### 3. Site Configuration
- Package name changed to "h2oplumbers" in `package.json`
- All metadata and social links updated in `src/config/site.ts`
- Removed Woodland and Longview from service areas (focusing on closer Vancouver area)

### 4. Content Updates
- All "All County" references replaced with "H2O" throughout the codebase
- URLs updated from allcountyplumbers.com to h2oplumbers.com
- Email addresses updated

### 5. Environment Variables
- `.env.local` updated with placeholders for new H2O database
- **IMPORTANT**: You need to set up a NEW database for H2O at https://console.prisma.io
- Do NOT use the All County database to keep the sites separate

## Next Steps

### Required Before Deployment

1. **Database Setup**
   - Create a new Prisma database for H2O
   - Update `.env.local` with the new DATABASE_URL
   - Update PRISMA_ACCELERATE_URL if using Prisma Accelerate
   - Run `npm run db:push` to create tables

2. **Logo & Images**
   - Replace logo files in `public/` directory
   - Update team photos in `public/images/team/`
   - Replace hero images with H2O-specific images
   - Update favicon files

3. **Content Review**
   - Review `src/app/about/page.tsx` for company history
   - Update team member information in team pages
   - Review service descriptions for H2O-specific offerings
   - Check blog posts for company-specific references

4. **Social Media & Integrations**
   - Set up Google Analytics (new property for H2O)
   - Create H2O Facebook, Instagram, Twitter accounts if needed
   - Update social media links in config files
   - Set up Google Business Profile for H2O

5. **Testing**
   - Run `npm run lint` to check for errors
   - Run `npm run type-check` for TypeScript issues
   - Test contact forms with new email
   - Verify phone number displays correctly
   - Check all service area pages

### Sister Company Relationship

The sites link to each other as sister companies:
- H2O site links to All County at: https://allcountyplumbers.com
- All County site links to H2O at: https://h2oplumbers.com

## Development

```bash
# Install dependencies
npm install

# Set up database (after updating .env.local)
npm run db:push

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site should be deployed separately from All County Plumbers:
- Different domain: h2oplumbers.com
- Different database
- Different analytics/tracking
- Different email configurations

## Key Differences from All County

- **Color Scheme**: Blue/cyan vs red/navy
- **Service Area**: Focused on Vancouver, WA (All County covers broader area including Longview/Cowlitz County)
- **Established**: 2009 (vs All County's 2004)
- **Branding**: More modern "H2O" water-focused brand

## Support

For questions about the codebase or deployment, refer to the original documentation files:
- `DEPLOYMENT-CHECKLIST.md`
- `DATABASE_SETUP.md`
- `SITE_STRUCTURE.md`
