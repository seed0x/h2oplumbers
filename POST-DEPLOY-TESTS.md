# Post-Deployment Testing Plan

## 🚀 Once Vercel Deployment Completes

### Immediate Tests (5 minutes)

#### 1. **Get Staging URL**
- Go to Vercel dashboard
- Find the deployment preview URL
- Should be something like: `h2oplumbers-xxxxx.vercel.app`

#### 2. **Test Core Pages Load**
- [ ] Homepage loads
- [ ] /about loads
- [ ] /contact loads
- [ ] /residential loads
- [ ] /commercial loads
- [ ] /service-areas/vancouver-wa-plumber loads

#### 3. **Test Critical Redirects**
Test these old WordPress URLs redirect properly:
- [ ] `/contact-us/` → `/contact/`
- [ ] `/vancouverwa/` → `/service-areas/vancouver-wa-plumber/`
- [ ] `/plumbing/` → `/residential/`
- [ ] `/drain/` → `/services/drain-cleaning/`
- [ ] `/h2o-specials/` → `/coupons/`

#### 4. **Verify SEO Elements**
- [ ] View source on homepage - check for LocalBusiness schema
- [ ] Check `/sitemap.xml` loads
- [ ] Check `/robots.txt` loads
- [ ] Verify Google Search Console meta tag in source

#### 5. **Test GA4 Tracking**
- [ ] Open browser dev tools → Network tab
- [ ] Load homepage
- [ ] Look for requests to `google-analytics.com` or `gtag`
- [ ] Should see measurement ID `G-G4N95KVWB8`

### Next: Resend Domain Setup (10 minutes)

Once staging tests pass:

1. **Add Domain to Resend**
   - Log into resend.com
   - Go to Domains
   - Add `h2oplumbers.com`

2. **Get DNS Records**
   - Resend will provide 3 DNS records:
     - SPF (TXT record)
     - DKIM (TXT record)  
     - DMARC (TXT record)

3. **Add DNS Records**
   - Go to your domain registrar
   - Add the 3 TXT records
   - Wait 5-10 minutes for propagation

4. **Verify Domain**
   - Click "Verify" in Resend dashboard
   - Should turn green when verified

5. **Update Environment Variable**
   - Change `FROM_EMAIL` in Vercel from `onboarding@resend.dev` to `noreply@h2oplumbers.com`
   - Redeploy

### Final: DNS Cutover (When Ready)

**Only after all tests pass:**

1. **Add Domain to Vercel**
   - Go to Vercel project → Settings → Domains
   - Add `h2oplumbers.com` and `www.h2oplumbers.com`

2. **Get DNS Instructions**
   - Vercel will show you the A record or CNAME to point to

3. **Update DNS at Registrar**
   - Point `h2oplumbers.com` A record to Vercel's IP
   - Point `www.h2oplumbers.com` CNAME to `cname.vercel-dns.com`
   - Lower TTL to 300 seconds

4. **Wait for Propagation** (5-30 minutes)
   - Check `https://h2oplumbers.com` periodically
   - Should load the new site!

5. **Verify SSL**
   - Vercel auto-provisions SSL
   - Check `https://` loads with green padlock

## 🎯 Success Criteria

Before considering migration complete:

- [ ] All pages load on staging
- [ ] Redirects work correctly
- [ ] Forms can be submitted
- [ ] Emails send successfully
- [ ] GA4 tracking works
- [ ] Search Console verified
- [ ] SSL certificate active
- [ ] No 404 errors on key pages
- [ ] Mobile site looks good
- [ ] Page speed is acceptable

## 📊 Post-Launch Monitoring (Week 1)

- [ ] Monitor Vercel logs for errors
- [ ] Check Google Search Console for crawl issues
- [ ] Verify GA4 data coming in
- [ ] Test contact form submissions
- [ ] Monitor email delivery
- [ ] Check for any 404s or broken links
- [ ] Review Core Web Vitals
- [ ] Get first customer leads! 🎉

---

**Current Status:** Waiting for Vercel deployment to complete...

Once deployed, start with "Immediate Tests" above.
