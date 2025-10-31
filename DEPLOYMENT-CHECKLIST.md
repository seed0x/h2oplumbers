# H2O Plumbing - Site Migration Deployment Checklist

## Pre-Launch Preparation

### 1. Code & Configuration
- [x] Review and update business data config (expanded to Clark, Cowlitz, Skamania counties)
- [x] Analyze WordPress site data (GA, Search Console, sitemap)
- [x] Create URL redirect mapping (see data/url-redirect-mapping.md)
- [x] Add URL redirects from old WordPress URLs to next.config.js (40+ redirects)
- [x] Optimize Vancouver WA page metadata for #1 rankings
- [x] Update sitemap with correct domain (h2oplumbers.com)
- [x] Update robots.txt with correct sitemap URL
- [x] Enable LocalBusiness structured data on homepage
- [x] Run `npm run build` - SUCCESS (55 pages generated)
- [x] Run `npm run lint` - PASSED (3 minor warnings)
- [x] Run `npm run type-check` - PASSED
- [ ] Deploy to Vercel and verify
- [ ] Test redirects working on Vercel
- [ ] Update NEXT_PUBLIC_SITE_URL environment variable to h2oplumbers.com
- [x] Set up production database (Prisma) and push schema
- [ ] Add all environment variables to Vercel

### 2. SEO Verification
- [x] Test all redirects work correctly (verified on Vercel)
- [x] Verify sitemap.xml generates at /sitemap.xml (working)
- [x] Check robots.txt is accessible at /robots.txt (working)
- [ ] Add canonical tags to pages with duplicates
- [ ] Implement LocalBusiness schema on homepage
- [ ] Add Service schema to service pages
- [x] Test meta titles and descriptions are rendering (done for Vancouver, homepage, fixture installation)

### 3. Content Review
- [x] Review Vancouver service area page (optimized with 30 neighborhoods)
- [x] Add ADA-specific content to fixture installation page (completed with brand colors)
- [ ] Enhance drain cleaning page with service differentiation
- [ ] Add pipe comparison content to repipe page
- [ ] Verify all contact forms work (BLOCKED: need email setup)
- [ ] Test booking system functionality (BLOCKED: need email setup)

## Email Configuration (CURRENT STEP)

### 3A. Email Setup - Resend Configuration
- [x] **Create Resend account and get API key**
- [ ] **Add h2oplumbers.com domain to Resend**
- [ ] **Configure DNS records for Resend domain verification**
- [ ] **Verify domain in Resend dashboard**
- [x] **Add environment variables to Vercel:**
  ```
  DATABASE_URL=postgres://...
  PRISMA_ACCELERATE_URL=prisma+postgres://...
  RESEND_API_KEY=re_Nxfoo3Dv_DQPkyTBea14D1qhvJrq7Vy24
  FROM_EMAIL=onboarding@resend.dev (update after domain verified)
  ```
- [ ] **Set variables for Production, Preview, and Development**
- [ ] **Redeploy Vercel site after adding variables**
- [ ] **Test contact form on Vercel staging URL**
- [ ] **Test booking form on Vercel staging URL**
- [ ] **Verify emails are being sent successfully**

## DNS & Domain Setup

### 4. Domain Configuration
- [ ] Set up new hosting/deployment platform (Vercel)
- [ ] Deploy new site to staging URL first (Vercel preview URL)
- [ ] Test staging site thoroughly (forms, pages loading)
- [ ] Add h2oplumbers.com domain to Vercel project
- [ ] Update DNS A/CNAME records to point to Vercel
- [ ] Keep TTL low (300s) for quick rollback if needed

### 5. SSL Certificate
- [ ] Verify SSL certificate auto-provisions
- [ ] Test HTTPS redirects work properly
- [ ] Check for mixed content warnings

## Search Console & Analytics

### 6. Google Search Console
- [ ] Add new property for h2oplumbers.com
- [ ] Verify ownership via DNS or HTML file
- [ ] Submit sitemap.xml (https://h2oplumbers.com/sitemap.xml)
- [ ] Monitor crawl errors in Coverage report
- [ ] Request re-indexing for top pages:
  - Homepage
  - /contact/
  - /services/
  - /residential/
  - /commercial/
  - /service-areas/

### 7. Google Analytics
- [ ] Set up GA4 property (if not already done)
- [ ] Add tracking code to all pages
- [ ] Verify data collection
- [ ] Set up conversion goals
- [ ] Create custom dashboards for:
  - Service page performance
  - Service area performance
  - Contact form submissions
  - Phone call tracking

### 8. Google Business Profile
- [ ] Update website URL
- [ ] Verify NAP (Name, Address, Phone) consistency
- [ ] Add new service area pages to posts
- [ ] Update business hours if changed

## Monitoring & Validation

### 9. Post-Launch Checks (Day 1)
- [ ] Verify sitemap is being crawled
- [ ] Check Search Console for crawl errors
- [ ] Monitor server logs for 404 errors
- [ ] Test contact forms receiving submissions
- [ ] Verify phone tracking working (if implemented)
- [ ] Check page load speeds with Lighthouse
- [ ] Test mobile responsiveness
- [ ] Verify all pages loading correctly

### 10. Weekly Monitoring (Week 1-4)
- [ ] Review Search Console performance data
- [ ] Check for ranking improvements on key terms:
  - "h2o plumbing"
  - "plumbers battle ground wa"
  - "plumber near me"
  - "residential plumbing battle ground"
- [ ] Monitor click-through rates
- [ ] Track conversion rates
- [ ] Review server error logs

### 11. Monthly Review (Month 1-3)
- [ ] Compare traffic vs old site baseline
- [ ] Review keyword rankings progress
- [ ] Analyze top landing pages
- [ ] Check bounce rates by page
- [ ] Monitor Core Web Vitals
- [ ] Review and optimize underperforming pages

## Backlink Maintenance

### 12. Top Backlink Verification
- [ ] Set up Google Business Profile and verify backlink
- [ ] Submit to local directories (Yelp, Angi, HomeAdvisor)
- [ ] Add to local business listings
- [ ] Monitor backlink profile in Search Console
- [ ] Update any broken backlinks manually

## Rollback Plan

### 13. Emergency Rollback (if needed)
- [ ] Keep old site accessible at staging URL
- [ ] Document rollback DNS changes
- [ ] Have backup of old .htaccess or redirect rules
- [ ] Keep old site database backup for 90 days

## Key Performance Indicators

### 14. Success Metrics (3-month targets)
- [ ] Homepage: Establish baseline traffic
- [ ] "Plumbers Battle Ground WA": Target top 10
- [ ] Overall organic traffic: Track growth month-over-month
- [ ] Contact form submissions: Set baseline and improve
- [ ] Phone calls from site: Track and optimize
- [ ] Service pages: Monitor engagement and conversions
- [ ] Service area pages: Track local search performance

## Technical SEO Tasks

### 15. Ongoing Optimization
- [ ] Fix 4 duplicate canonical issues
- [ ] Review 3 noindex pages (verify intentional)
- [ ] Submit 9 discovered-not-indexed pages
- [ ] Improve 5 crawled-not-indexed pages
- [ ] Add internal linking between service pages
- [ ] Create XML sitemap index if needed
- [ ] Set up automatic sitemap updates

## Content Pipeline

### 16. Post-Launch Content (30-60 days)
- [ ] Write 3 blog posts targeting long-tail keywords
- [ ] Add FAQ section to top service pages
- [ ] Create project gallery with Vancouver examples
- [ ] Add customer testimonials with location context
- [ ] Develop pricing guide pages
- [ ] Launch emergency service dedicated page

## Tools & Resources

### Required Access
- [ ] Domain registrar login
- [ ] Hosting/deployment platform access
- [ ] Google Search Console access
- [ ] Google Analytics access
- [ ] Google Business Profile access
- [ ] Repository/GitHub access

### Helpful Tools
- Redirect tester: https://www.redirect-checker.org/
- Sitemap validator: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Schema validator: https://validator.schema.org/
- Page speed: https://pagespeed.web.dev/
- Mobile-friendly: https://search.google.com/test/mobile-friendly

## Notes & Observations

### Critical Success Factors
1. **Local SEO** - Focus on Battle Ground and surrounding areas
2. **Brand establishment** - Build H2O Plumbing brand presence
3. **Search Console monitoring** - Watch for coverage issues and indexing
4. **Email functionality** - Ensure lead capture is working properly
5. **Local citations** - Keep NAP consistent everywhere

### Timeline Expectations
- **Day 1-7**: Possible ranking fluctuation normal
- **Week 2-4**: Rankings should stabilize
- **Month 2-3**: Should see improvements from optimizations
- **Month 3-6**: Full SEO impact visible

### Red Flags to Watch
- Sudden drop in brand keyword rankings
- Increase in 404 errors
- Drop in crawl rate
- Decrease in indexed pages
- Loss of backlinks

---

## Current Status Summary

### ✅ Completed:
- Database created and schema pushed (Prisma)
- Resend account created with API key
- Local environment variables configured (.env.local)
- Business data config reviewed

### 🔄 In Progress:
- **Adding environment variables to Vercel**
- **Resend domain verification setup**

### ⏸️ Next Steps:
- Deploy to Vercel staging
- Test email functionality
- Configure DNS for domain
- Google Search Console setup
- Live deployment

## Final Pre-Launch Checklist

Before changing DNS:
- [ ] Staging site fully tested (Vercel working)
- [ ] Environment variables added to Vercel
- [ ] **Email configuration completed and tested**
- [ ] Database migrations verified
- [ ] Rollback plan documented
- [ ] Monitoring tools ready
- [ ] Search Console configured
- [ ] Off-hours deployment scheduled (optional for new site)

**Vercel Staging URL**: TBD after first deployment
**Current Live Site**: h2oplumbers.com (WordPress)
**Target Domain**: h2oplumbers.com (migrating to Next.js/Vercel)
**Deployment Date**: _____________
**Deployed By**: _____________
**Rollback Deadline**: 72 hours
