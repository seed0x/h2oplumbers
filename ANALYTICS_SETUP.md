# Analytics Setup for H2O Plumbing

This document explains how to set up Google Analytics 4 and Facebook Pixel tracking for the H2O Plumbing website.

## Google Analytics 4 Setup

### 1. Create a Google Analytics Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for H2O Plumbing
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Add Environment Variable
Add to your `.env.local` file:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Verify Tracking
- Visit your website
- Open Chrome DevTools > Network tab
- Filter for "google-analytics.com"
- You should see requests to Google Analytics

### What's Being Tracked:
- ✅ Page views
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ Form submissions
- ✅ Phone call clicks
- ✅ Custom events

## Facebook Pixel Setup

### 1. Create a Facebook Pixel
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager/)
2. Create a new Pixel for H2O Plumbing
3. Get your Pixel ID (numeric ID)

### 2. Add Environment Variable
Add to your `.env.local` file:
```bash
NEXT_PUBLIC_FB_PIXEL_ID=1234567890
```

### 3. Verify Tracking
- Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/) Chrome extension
- Visit your website
- Click the extension icon to see if Pixel is active

### What's Being Tracked:
- ✅ Page views
- ✅ Lead events (booking form submissions)
- ✅ Contact events (contact form submissions)

## Google Search Console Setup

### 1. Verify Ownership
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `https://h2oplumbers.com`
3. Choose verification method:
   - **Recommended**: HTML tag method
   - Add the verification meta tag to `src/app/layout.tsx` in the `<head>` section

### 2. Add Verification Meta Tag
```tsx
<head>
  {/* Other head tags */}
  <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
</head>
```

### 3. Submit Sitemap
1. After verification, go to Sitemaps section
2. Submit: `https://h2oplumbers.com/sitemap.xml`

### What You Get:
- ✅ Search performance data
- ✅ Index coverage reports
- ✅ Mobile usability insights
- ✅ Rich results monitoring
- ✅ Manual actions notifications

## Environment Variables Summary

Create a `.env.local` file in the root directory with:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Facebook Pixel
NEXT_PUBLIC_FB_PIXEL_ID=1234567890

# Other environment variables
NEXT_PUBLIC_SITE_URL=https://h2oplumbers.com
```

## Testing in Development

To test analytics in development:
1. Add the environment variables to `.env.local`
2. Run `npm run dev`
3. Open your browser's DevTools Console
4. Look for analytics events being logged

## Production Deployment

Make sure to add these environment variables to your hosting platform:
- **Vercel**: Project Settings > Environment Variables
- **Netlify**: Site Settings > Build & Deploy > Environment
- **Other**: Follow your platform's documentation

## Privacy Compliance

Make sure you have:
- ✅ Privacy Policy page (`/privacy`)
- ✅ Cookie consent mechanism (if required by your jurisdiction)
- ✅ GDPR compliance (if serving EU users)
- ✅ CCPA compliance (if serving California users)

## Need Help?

- Google Analytics: [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- Facebook Pixel: [Pixel Documentation](https://www.facebook.com/business/help/742478679120153)
- Search Console: [GSC Documentation](https://support.google.com/webmasters/answer/9128668)
