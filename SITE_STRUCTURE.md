# All County Plumbing - Complete Site Structure

## ✅ PAGES THAT EXIST

### Main Pages
- `/` - Homepage
- `/about` - About Us
- `/contact` - Contact
- `/booking` - Online Booking
- `/coupons` - Coupons & Specials

### Customer Type Pages (WHO you serve)
- `/residential` - Residential Services Overview
- `/commercial` - Commercial Services Overview  
- `/new-construction` - New Construction Projects
- `/tenant-improvements` - Tenant Improvement Work

### Service Pages (WHAT you do)
- `/services` - All Services Hub
- `/services/emergency-plumbing` - Same-Day Service
- `/services/drain-cleaning` - Drain Cleaning
- `/services/water-heater-repair` - Water Heater Services
- `/services/camera-scope-inspections` - Camera & Scope Inspections
- `/services/sewer-line-repair` - Sewer Line Repair
- `/services/fixture-installation` - Fixture Installation

### Service Area Pages (WHERE you serve)
- `/service-areas/vancouver-wa-plumber` - Vancouver
- `/service-areas/battle-ground-plumber` - Battle Ground
- `/service-areas/camas-plumber` - Camas
- `/service-areas/washougal-plumber` - Washougal
- `/service-areas/ridgefield-plumber` - Ridgefield
- `/service-areas/la-center-plumber` - La Center
- `/service-areas/woodland-plumber` - Woodland
- `/service-areas/longview-plumber` - Longview
- `/service-areas/kelso-plumber` - Kelso
- `/service-areas/yacolt-plumber` - Yacolt
- `/service-areas/amboy-plumber` - Amboy
- `/service-areas/ariel-plumber` - Ariel
- `/service-areas/kalama-plumber` - Kalama

### Supporting Pages
- `/calculator` - Cost Calculator
- `/service-area` - Service Area Overview
- `/team` - Team Page
- `/reviews` - Reviews
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/offline` - Offline Page

---

## 🔧 RECENT FIXES COMPLETED

### 1. Renamed Service Page
- ❌ OLD: `/services/leak-detection`
- ✅ NEW: `/services/camera-scope-inspections`
- Updated: Sitemap, Header Navigation, API Routes, All Form Dropdowns

### 2. Updated Header Navigation
- Added: Residential Services link
- Added: Tenant Improvements link
- Fixed: Camera Inspection link
- Organized: Services dropdown with all customer types

### 3. Form Dropdown Updates
All service page forms now use:
- `camera-inspection` instead of `leak-detection`
- Consistent service naming across all pages

---

## 📋 NAVIGATION STRUCTURE

### Header Menu
```
Home
Services ▼
  ├─ All Services
  ├─ Same-Day Service
  ├─ Drain Cleaning
  ├─ Water Heater Service
  ├─ Camera Inspection
  ├─ Fixture Installation
  ├─ Sewer Line Repair
  ├─ Residential Services
  ├─ Commercial Plumbing
  ├─ New Construction
  └─ Tenant Improvements

Service Areas ▼
  ├─ Vancouver
  ├─ Battle Ground
  ├─ Camas
  ├─ Washougal
  ├─ Ridgefield
  ├─ La Center
  ├─ Woodland
  └─ Longview

About Us
Coupons
Contact
```

---

## 🎯 SITE ARCHITECTURE PHILOSOPHY

### Customer Journey Focus
1. **WHO** (Customer Type) - Residential, Commercial, New Construction, Tenant Improvements
2. **WHAT** (Services) - Specific services like Drain Cleaning, Water Heater, etc.
3. **WHERE** (Service Areas) - Geographic locations served

### Why This Structure Works
- **Services are Cross-Cutting**: A drain cleaning service applies to ALL customer types
- **Avoids Duplication**: One service page instead of separate residential/commercial versions
- **Better SEO**: Shorter URLs, clearer content hierarchy
- **User-Friendly**: Most customers search for service type, not customer type + service

---

## 🚀 NEXT STEPS (If Needed)

### Future Considerations
1. Could add `/blog` for content marketing
2. Could add `/financing` for payment options
3. Could add `/warranty` for warranty information
4. Could add `/careers` for recruiting

### Pages to Review/Update
- Ensure all service pages have consistent styling (hero + form + coupon)
- Review residential/commercial/new-construction/tenant-improvements overview pages
- Verify all service area pages are complete

---

## 📝 NOTES

- All service pages now use camera-scope-inspections (not leak-detection)
- Header navigation updated with correct links
- Sitemap updated
- API routes updated
- All form dropdowns updated
- **Remember to restart dev server** for folder rename to take effect
