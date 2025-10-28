# Site Migration Deployment Checklist

## Pre-Launch Preparation

### 1. Code & Configuration ✅
- [x] Add URL redirects to next.config.js
- [x] Update sitemap with Search Console priorities
- [x] Create robots.txt
- [x] Fix redirects to work with trailing slashes
- [x] Deploy to Vercel and verify
- [x] Test redirects working on Vercel
- [ ] Update NEXT_PUBLIC_SITE_URL environment variable to production domain
- [ ] Verify all API keys and secrets are in production environment
- [ ] Run `npm run build` to test production build (done via Vercel)
- [ ] Run `npm run lint` to check for errors
- [ ] Run `npm run type-check` for TypeScript errors

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

### 3A. Email Setup - MUST COMPLETE BEFORE DNS SWAP
- [ ] **Complete Hostinger email setup for office@all-county-plumbing.net**
- [ ] **Set a strong password and save it securely**
- [ ] **Add environment variables to Vercel:**
  ```
  SMTP_HOST=smtp.hostinger.com
  SMTP_PORT=465
  SMTP_SECURE=true
  SMTP_USER=office@all-county-plumbing.net
  SMTP_PASSWORD=[your password from Hostinger]
  EMAIL_FROM=office@all-county-plumbing.net
  BUSINESS_EMAIL=office@all-county-plumbing.net
  BUSINESS_PHONE=(360) 883-2506
  ```
- [ ] **Set variables for Production, Preview, and Development**
- [ ] **Redeploy Vercel site after adding variables**
- [ ] **Test contact form at https://allcountyplumbers.vercel.app/contact/**
- [ ] **Test booking form at https://allcountyplumbers.vercel.app/booking/**
- [ ] **Verify emails arrive at office@all-county-plumbing.net**

## DNS & Domain Setup

### 4. Domain Configuration
- [ ] Backup old site completely
- [ ] Document current DNS settings from Hostinger
- [x] Set up new hosting/deployment platform (Vercel - DONE)
- [x] Deploy new site to staging URL first (https://allcountyplumbers.vercel.app/)
- [x] Test staging site thoroughly (redirects working, pages loading)
- [ ] Update DNS A/CNAME records to point to new hosting
- [ ] Keep TTL low (300s) for quick rollback if needed

### 5. SSL Certificate
- [ ] Verify SSL certificate auto-provisions
- [ ] Test HTTPS redirects work properly
- [ ] Check for mixed content warnings

## Search Console & Analytics

### 6. Google Search Console
- [ ] Add new property for new site if domain changes
- [ ] Verify ownership via DNS or HTML file
- [ ] Submit sitemap.xml (https://allcountyplumbers.com/sitemap.xml)
- [ ] Use Change of Address tool (if domain changing)
- [ ] Monitor crawl errors in Coverage report
- [ ] Request re-indexing for top pages:
  - Homepage
  - /contact/
  - /services/fixture-installation/ (was ADA bathroom)
  - /services/drain-cleaning/
  - /services/repipe/
  - /service-areas/vancouver-wa-plumber/

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
- [ ] Test all top 20 old URLs redirect correctly
- [ ] Verify sitemap is being crawled
- [ ] Check Search Console for crawl errors
- [ ] Monitor server logs for 404 errors
- [ ] Test contact forms receiving submissions
- [ ] Verify phone tracking working
- [ ] Check page load speeds with Lighthouse
- [ ] Test mobile responsiveness

### 10. Weekly Monitoring (Week 1-4)
- [ ] Review Search Console performance data
- [ ] Check for ranking drops on key terms:
  - "all county plumbing"
  - "plumbers vancouver wa"
  - "plumber near me"
- [ ] Monitor click-through rates
- [ ] Track conversion rates
- [ ] Review server error logs
- [ ] Check backlinks still pointing correctly

### 11. Monthly Review (Month 1-3)
- [ ] Compare traffic vs old site baseline
- [ ] Review keyword rankings progress
- [ ] Analyze top landing pages
- [ ] Check bounce rates by page
- [ ] Monitor Core Web Vitals
- [ ] Review and optimize underperforming pages

## Backlink Maintenance

### 12. Top Backlink Verification
Based on Search Console linking sites data:
- [ ] Verify sociallink.com links (49 pages) still work
- [ ] Check mytrueguard.com links (6 pages)
- [ ] Confirm biaofclarkcounty.org links (5 pages)
- [ ] Test nextdoor.com profile (4 pages)
- [ ] Update any broken backlinks manually

## Rollback Plan

### 13. Emergency Rollback (if needed)
- [ ] Keep old site accessible at staging URL
- [ ] Document rollback DNS changes
- [ ] Have backup of old .htaccess or redirect rules
- [ ] Keep old site database backup for 90 days

## Key Performance Indicators

### 14. Success Metrics (3-month targets)
- [ ] Homepage: Maintain 397+ clicks/month
- [ ] "Plumbers Vancouver WA": Improve from position 38 to top 10
- [ ] Overall organic traffic: Increase 20%
- [ ] Contact form submissions: Maintain or improve
- [ ] Phone calls from site: Track baseline and improve
- [ ] ADA fixture page: 15+ clicks (was 14 on old URL)
- [ ] Vancouver service area: 50+ clicks (currently 5)

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
1. **Vancouver targeting** - This is your biggest opportunity (4,740 impressions/month)
2. **Redirect accuracy** - All old URLs must redirect properly
3. **Search Console monitoring** - Watch for coverage issues
4. **Brand keywords** - Maintain strong positions (currently #4-5)
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
- SEO optimizations (Vancouver, homepage, ADA content)
- 301 redirects configured and working
- Vercel deployment live: https://allcountyplumbers.vercel.app/
- robots.txt and sitemap.xml working
- All redirect tests passing

### 🔄 In Progress:
- **Email setup (Hostinger)** - MUST complete before DNS swap

### ⏸️ Paused / Not Started:
- Form testing (blocked by email setup)
- DNS configuration
- Google Search Console setup
- Live deployment

## Final Pre-Launch Checklist

Before changing DNS:
- [x] Staging site fully tested (Vercel working)
- [x] All redirects verified (308 redirects working)
- [ ] **Email configuration completed and tested**
- [ ] Backups completed
- [ ] Team notified
- [ ] Rollback plan documented
- [ ] Monitoring tools ready
- [ ] Search Console configured
- [ ] Off-hours deployment scheduled

**Vercel Staging URL**: https://allcountyplumbers.vercel.app/
**Current Live Site**: Hostinger (WordPress)
**Target Domain**: allcountyplumbers.com
**Deployment Date**: _____________
**Deployed By**: _____________
**Rollback Deadline**: 72 hours
