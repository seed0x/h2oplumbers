# All County Plumbing - Service Page Style Guide & Instructions

## Overview
This guide documents the standardized approach for creating and updating service pages across the All County Plumbing website.

---

## 🎨 Design System

### Brand Colors
- **Primary Red**: `brand-red` (#dc2626) - Main CTA buttons, headings, accents
- **Dark Red**: `brand-red-dark` - Hover states, gradients
- **Dark Backgrounds**: `slate-900`, `slate-800` - Hero sections, dark feature sections
- **Light Backgrounds**: `slate-50`, `white` - Content sections (alternating)
- **Accent Colors**: 
  - Yellow-400 for emergency/important highlights
  - Green-600 for positive actions
  - Red shades for warnings

### Typography
- **Headings**: Use `font-heading` class (Roboto Condensed font family)
  - Make headings bold with `font-bold`
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-4xl md:text-5xl`
  - H3: `text-3xl`
  - H4: `text-2xl` or `text-xl`
- **Body Text**: 
  - Base: `text-slate-700` or `text-slate-600`
  - On dark backgrounds: `text-slate-200` or `text-white/90`
  - Lead paragraphs: `text-xl md:text-2xl`
  - Regular paragraphs: `text-lg` or base size

### Spacing
- **Section Padding**: `py-20` (standard), `py-12` (compact like stats)
- **Container**: `container mx-auto px-4`
- **Max Width**: `max-w-6xl mx-auto` for content, `max-w-3xl mx-auto` for text blocks
- **Gaps**: `gap-8` (standard), `gap-12` (larger), `gap-6` (compact)

---

## 📄 Service Page Structure

### Required Sections (in order):

1. **Breadcrumbs** (optional but recommended)
   - Light gray background (`bg-slate-50 py-4`)
   - Shows: Home / Services / [Current Page]

2. **Hero Section**
   - **Background**: Dark gradient `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`
   - **Pattern**: Subtle background pattern at 5% opacity
   - **Layout**: Two-column grid (text left, form right)
   - **Left Column**:
     - Large H1 heading with `font-heading`, `font-bold`, `uppercase`, `tracking-tight`
     - Subtitle paragraph mentioning full service area
     - Single red CTA button (phone number)
     - Trust badges at bottom (3 items with red dots)
   - **Right Column**:
     - White contact form card (`bg-white/95 backdrop-blur-sm rounded-2xl`)
     - Form fields: Name, Phone, Service Dropdown, Submit button
     - Privacy disclaimer at bottom

3. **Stats Section**
   - **Background**: Dark (`bg-slate-900 text-white`)
   - **Numbers**: Large bold in brand-red with `font-heading`
   - Grid of 3-4 key metrics
   - Comes immediately after hero

4. **Coupon Banner**
   - **Background**: Light gray (`bg-slate-50 py-8`)
   - Red gradient banner (`bg-gradient-to-r from-brand-red to-red-600`)
   - Layout: Offer details left, code + CTA right
   - **Must be** between stats and main content sections

5. **Main Content Sections** (alternating backgrounds)
   - Alternate between `bg-white` and `bg-gradient-to-br from-slate-50 via-white to-slate-50`
   - Each section: `py-20`
   - Headings with brand-red `<span>` accents on key words
   - Cards with:
     - White background
     - Border: `border-2 border-brand-red/20`
     - Rounded: `rounded-2xl`
     - Padding: `p-8`
     - Shadow: `shadow-lg hover:shadow-xl`
     - Hover effect: `hover:-translate-y-1 transition-all duration-300`

6. **Process Section** (if applicable)
   - Numbered steps (1-4)
   - Each step:
     - Gradient badge: `bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl`
     - Large number inside in white
     - Hover scale effect: `group-hover:scale-110 transition-transform duration-300`
   - Grid layout: 4 columns on desktop

7. **Feature Sections**
   - Icons in colored background circles
   - Cards with backgrounds matching section theme
   - Clear headings with `font-heading`

8. **CTA Section** (Final - Required)
   - **Background**: Dark gradient `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`
   - **Overlay**: Radial gradient with brand-red accent
   - Large heading with brand-red `<span>` accent
   - Descriptive paragraph
   - Large gradient button:
     - Classes: `bg-gradient-to-r from-brand-red to-brand-red-dark`
     - Shadow: `hover:shadow-2xl hover:shadow-brand-red/50`
     - Phone icon + phone number
     - Hover effect: `hover:-translate-y-1 transform`

---

## 🌐 SEO Strategy

### Service Area Coverage

**Cities to Include (based on importance):**

**Clark County:**
- Vancouver (most important)
- Battle Ground
- Camas
- Washougal
- Ridgefield
- La Center
- Yacolt
- Amboy

**Cowlitz County:**
- Longview (most important)
- Woodland
- Kalama
- Castle Rock

### SEO Implementation

#### 1. Metadata (Top of file)
```typescript
export const metadata: Metadata = {
  title: `[Service] Vancouver, Battle Ground, Longview WA | Clark & Cowlitz County | All County`,
  description: `[Service description] serving Vancouver, Battle Ground, Longview, Camas, Washougal, Ridgefield, Woodland. Clark County & Cowlitz County. [Key features]. Call ${BUSINESS_DATA.phone}.`,
  keywords: `[service] Vancouver WA, [service] Longview, [service] Battle Ground, [service] Camas Washougal, [service] Clark County Cowlitz County`,
};
```

#### 2. Content Strategy
- **H1**: Use "Southwest Washington" or list 2-3 major cities
- **Hero Paragraph**: Include comprehensive city list (Vancouver through Kalama)
- **Body Sections**: Use "Southwest Washington" or "Clark County and Cowlitz County" to avoid repetition
- **Commercial Sections**: Rotate which cities get mentioned
- **Final CTA**: Include 5-7 major cities

#### 3. Existing SEO System (Preserve)
- Always use `generateSocialMeta()` for pages in the services directory
- Service pages can use standard Metadata or generateSocialMeta - both work
- OpenGraph and Twitter card data automatically included
- Schema.org data in `social-meta.ts` includes service areas

---

## 🔧 Component Usage

### Required Imports
```typescript
import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/lib/business-data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// Icons as needed from 'lucide-react'
```

### Contact Form (Standard)
Always use the same form structure across service pages:
- Name field
- Phone field  
- Service dropdown (customize options per page)
- Red submit button
- Privacy disclaimer

### Buttons
- **Primary CTA**: Red gradient background, white text, phone icon
- **Secondary CTA**: White outline, transparent background, hover effects
- Use `Button` component with `asChild` for links

### Cards
```tsx
className="bg-white border-2 border-brand-red/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
```

---

## 📝 Content Guidelines

### Tone
- Professional but friendly
- Family-focused (mention "families" often)
- Local emphasis (mention cities naturally)
- Trust-building (licenses, experience, guarantees)

### Key Messaging
- "Family-Owned Since 2004"
- "Licensed & Insured"
- "Same-Day Service Available"
- Service both Clark County and Cowlitz County
- 20+ years experience

### Word Choices
- ✅ "Southwest Washington" (broad, professional)
- ✅ "Clark County and Cowlitz County" (specific counties)
- ✅ "Vancouver to Longview" (shows range)
- ✅ "families" instead of just "homeowners"
- ❌ Don't over-use "Vancouver" - balance with other cities
- ❌ Don't repeat full city lists - vary the mentions

---

## 🎯 Visual Consistency Checklist

When creating/updating a service page:

- [ ] Dark hero with pattern overlay
- [ ] Contact form included in hero
- [ ] Stats section with brand-red numbers
- [ ] Coupon banner after stats
- [ ] Alternating section backgrounds (white/gray)
- [ ] Cards with brand-red borders and hover effects
- [ ] Process section with gradient number badges
- [ ] Icons in colored backgrounds
- [ ] Headings use `font-heading` and `font-bold`
- [ ] Key words highlighted with red `<span>` tags
- [ ] Final dark CTA section with gradient button
- [ ] Mentions multiple cities throughout
- [ ] Phone number uses `BUSINESS_DATA.phone`
- [ ] All external links use `Link` component

---

## 🔗 Cross-Page Links

### Common Links to Include:
- `/services` - Main services page
- `/commercial` - For business customers
- `/booking` - Online scheduling
- `/contact` - Contact page
- Service-specific pages when relevant

### Link Styling:
```tsx
className="text-brand-red font-bold hover:text-brand-red-dark transition-colors"
```

---

## 📱 Responsive Design

### Breakpoints Used:
- `sm:` - 640px (small)
- `md:` - 768px (medium)
- `lg:` - 1024px (large)
- `xl:` - 1280px (extra large)

### Common Patterns:
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flex: `flex-col sm:flex-row`
- Text sizes: `text-4xl md:text-5xl lg:text-6xl`
- Padding: `px-4` on container, `py-20` on sections
- Hero form: Hidden on mobile, shows on lg

---

## 🚀 Quick Start Template

When creating a new service page:

1. Copy structure from `drain-cleaning/page.tsx` or `emergency-plumbing/page.tsx`
2. Update metadata with service-specific info + full city list
3. Customize hero H1 and description
4. Update form dropdown options
5. Replace content sections with service-specific info
6. Ensure alternating backgrounds
7. Update CTA section with service-specific copy
8. Test responsive design
9. Verify all links work
10. Check SEO preview (title, description, OG tags)

---

## 📊 Analytics & Tracking

### Important Elements to Track:
- Phone number clicks (tel: links)
- Form submissions
- CTA button clicks
- Cross-page navigation

### Ensure tracking attributes if using:
- Add `data-track` attributes as needed
- Use meaningful IDs on CTA buttons
- Track coupon code usage

---

## 🔄 Maintenance

### Regular Updates:
- Keep phone numbers consistent (use `BUSINESS_DATA`)
- Update promotion codes seasonally
- Refresh testimonials/reviews
- Update service area as business grows
- Keep city mentions current and accurate

### Version Control:
- Document major changes
- Test on staging before production
- Verify SEO after updates
- Check mobile rendering

---

## ✅ Final Checklist Before Publishing

- [ ] All metadata fields populated
- [ ] SEO-friendly title and description
- [ ] Multiple cities mentioned throughout
- [ ] Images optimized and have alt text
- [ ] All links tested and working
- [ ] Forms are functional
- [ ] Phone numbers correct
- [ ] Responsive design verified
- [ ] No console errors
- [ ] Page loads quickly
- [ ] Accessibility checked (headings, ARIA labels)
- [ ] Social meta tags preview correctly

---

**Last Updated**: December 2024
**Maintained by**: All County Plumbing Development Team
