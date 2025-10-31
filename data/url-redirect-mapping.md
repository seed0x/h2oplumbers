# H2O Plumbing - URL Redirect Mapping

## Priority Pages (by traffic)

### Top Traffic Pages to Maintain:
1. **/** → `/` (Homepage) - 9,850 views, 111 clicks
2. **/contact-us/** → `/contact` - 536 views, 12 clicks
3. **/about/** → `/about` - 315 views, 28 clicks  
4. **/plumbing/** → `/residential` - 201 views
5. **/vancouverwa/** → `/service-areas/vancouver-wa-plumber` - 185 views
6. **/h2o-specials/** → `/coupons` - 165 views, 124 sessions
7. **/drain/** → `/services/drain-cleaning` - 139 views
8. **/vancouverw/** → `/service-areas/vancouver-wa-plumber` - 132 views
9. **/drainc/** → `/services/drain-cleaning` - 109 views, 88 sessions
10. **/repipevancouverwa/** → `/services/repipe` - 94 views, 7 clicks

## Service Page Redirects

### Commercial Services:
- **/plumbingcommercial/** → `/commercial`
- **/drain/** → `/services/drain-cleaning`
- **/drainc/** → `/services/drain-cleaning`

### Residential Services:
- **/plumbing/** → `/residential`
- **/repipespecialists/** → `/services/repipe`
- **/repipevancouverwa/** → `/services/repipe`
- **/piping-repair/** → `/residential`

### Water Heaters:
- **/vancouverwater/** → `/services/water-heater-services` (8 clicks, 40K impressions!)
- **/boilermate-installation-and-service/** → `/services/water-heater-services` (7 clicks, good CTR)

### Repair Services:
- **/vancouverrepair/** → `/residential` (20K impressions)
- **/vancouverf/** → `/residential`

## Service Area Redirects

All Vancouver variations point to main service area page:
- **/vancouverwa/** → `/service-areas/vancouver-wa-plumber`
- **/vancouverw/** → `/service-areas/vancouver-wa-plumber` 
- **/vancouvers/** → `/service-areas/vancouver-wa-plumber` (23K impressions!)
- **/vancouverf/** → `/service-areas/vancouver-wa-plumber`
- **/vancouverrepair/** → `/service-areas/vancouver-wa-plumber`
- **/vancouverwater/** → `/service-areas/vancouver-wa-plumber`

## Customer Portal & Resources:
- **/myh2o/** → `/` (customer portal - 51 views)
- **/resources/** → `/` (14 views)
- **/special-offers/** → `/coupons` (14 views)
- **/h2o-specials/** → `/coupons`

## Blog/Content:
- **/water-heater-maintenance-a-step-by-step-guide/** → `/` (or create blog)
- **/repiping-project/** → `/services/repipe`
- **/leaky-faucets-and-valve-issues/** → `/residential`
- **/author/h2oplumbing/** → `/`
- **/category/water-heaters/** → `/services/water-heater-services`
- **/category/all/** → `/`
- **/category/repiping/** → `/services/repipe`
- **/category/fixtures/** → `/residential`
- **/tag/pex-pipe/** → `/services/repipe`
- **/tag/new-plumbing-pipe/** → `/services/repipe`

## Static Pages:
- **/privacy-policy/** → `/privacy-policy`
- **/404.html** → handled by Next.js 404

## Legacy/Unused:
- **/leadership/** → `/about`
- **/team/** → `/about`
- **/wpadmin/** → `/` (301 redirect)

## Key SEO Insights:

### High-Impression, Low-Click Pages (OPPORTUNITY):
1. **/vancouverwater/** - 40,754 impressions, 8 clicks (0.02% CTR) - HUGE OPPORTUNITY
2. **/repipevancouverwa/** - 54,816 impressions, 7 clicks
3. **/vancouvers/** - 23,576 impressions, 0 clicks
4. **/repipespecialists/** - 22,488 impressions, 0 clicks
5. **/vancouverw/** - 21,678 impressions, 0 clicks
6. **/vancouverrepair/** - 20,275 impressions, 1 click

### Top Keywords to Target (0 clicks but high impressions):
- "plumber vancouver wa" - 3,433 impressions
- "plumbers vancouver wa" - 3,122 impressions
- "commercial repipe" - 2,404 impressions
- "plumbing vancouver wa" - 2,380 impressions
- "vancouver wa plumber" - 2,183 impressions
- "repipe specialists commercial" - 2,020 impressions

### Brand Keywords (Good Performance):
- "h2o plumbing" - 19 clicks, position 24
- "h20 plumbing" - 17 clicks, position 18
- "h2o plumbing llc" - 7 clicks, position 7.5

## Next.js Route Structure:

```
/                           (Homepage)
/about                      (About page)
/contact                    (Contact form)
/coupons                    (Special offers)
/residential                (Residential services)
  /residential-plumbing
  /plumbing-repipes
  /plumbing-remodel
/commercial                 (Commercial services)
  /commercial-plumbing
  /drain-cleaning
  /water-heater-services
/service-areas              (Service areas overview)
  /vancouver-wa-plumber
  /battle-ground-plumber
  /camas-plumber
  /washougal-plumber
  /ridgefield-plumber
  /la-center-plumber
  /longview-plumber         (NEW - Cowlitz County)
  /kelso-plumber            (NEW - Cowlitz County)
  /woodland-plumber         (NEW - Cowlitz County)
  /stevenson-plumber        (NEW - Skamania County)
```

## Implementation Priority:

1. **High-Traffic Redirects** (Homepage, Contact, About) - CRITICAL
2. **Service Page Redirects** (Drain, Repipe, Water Heater) - HIGH
3. **Vancouver Area Redirects** (All variations) - HIGH (massive impression opportunity)
4. **Blog/Content Redirects** - MEDIUM
5. **Legacy Redirects** - LOW
