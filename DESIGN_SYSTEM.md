# H2O Plumbing Design System

## Background Pattern & Color System

### Established Pattern
**Clean, modern, professional** - Consistent throughout the site

---

## Background Types

### 1. **Hero/Primary Sections**
**Background:** Pure white (`bg-white`)
**Pattern:** Subtle grid pattern (cyan, 3% opacity)
```css
background-image: linear-gradient(to right, cyan 1px, transparent 1px),
                  linear-gradient(to bottom, cyan 1px, transparent 1px)
background-size: 60px 60px
opacity: 0.03
```
**Accents:** Gradient orbs (cyan/turquoise, 5% opacity, blurred)
**Use for:** Hero sections, primary content areas

---

### 2. **Content Sections (Light)**
**Background:** White or very light slate (`bg-white` or `bg-slate-50`)
**Pattern:** None or very subtle texture
**Border:** Use `border-slate-200` for separation
**Use for:** Service cards, content blocks, alternating sections

---

### 3. **Card Elements**
**Background:** White with slate-50 for nested elements
**Border:** `border-slate-200` (1-2px)
**Shadow:** `shadow-lg` for floating cards
**Pattern:** None - keep clean
**Use for:** Forms, feature cards, testimonials

---

### 4. **Accent Elements**
**Background:** `bg-slate-50` or `bg-brand-cyan/10`
**Use for:** Secondary cards, benefits, highlights
**Pattern:** None

---

### 5. **Promotional Banners**
**Background:** Gradient (`from-brand-cyan via-brand-turquoise to-brand-cyan`)
**Pattern:** Subtle dot pattern (white, 8% opacity)
**Text:** White
**Use for:** Coupon banners, special offers, CTAs

---

## Color Usage Guidelines

### Primary Colors
- **Brand Cyan:** `#06B6D4` - Primary actions, icons, highlights
- **Brand Turquoise:** `#14B8A6` - Secondary accent, gradients
- **White:** `#FFFFFF` - Main backgrounds, cards
- **Slate-50:** `#F8FAFC` - Subtle backgrounds
- **Slate-900:** `#0F172A` - Text (use sparingly)

### Text Colors
- **Headings:** `text-slate-900`
- **Body:** `text-slate-600`
- **Muted:** `text-slate-500`
- **On colored backgrounds:** `text-white`

### Border Colors
- **Default:** `border-slate-200`
- **Hover:** `border-brand-cyan/30`
- **Active:** `border-brand-cyan`

---

## Section Pattern Examples

### Hero Pattern
```tsx
<section className="relative overflow-hidden bg-white pt-20 pb-16">
  {/* Grid pattern */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `
        linear-gradient(to right, rgb(6 182 212) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(6 182 212) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px'
    }} />
  </div>
  
  {/* Gradient accents */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-cyan/5 via-transparent to-transparent rounded-full blur-3xl" />
</section>
```

### Clean Content Section
```tsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

### Alternating Section
```tsx
<section className="py-16 bg-slate-50">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

---

## Do's and Don'ts

### ✅ DO
- Use pure white for main backgrounds
- Use subtle grid pattern (3% opacity) for hero sections
- Use slate-50 for alternating sections
- Use slate-200 for borders
- Keep gradients to promotional elements
- Use cyan/turquoise for accents and CTAs

### ❌ DON'T
- Use dark backgrounds (navy, dark slate) except for footer
- Use busy patterns or textures
- Use multiple gradient orbs in small sections
- Mix too many background styles on one page
- Use colored backgrounds for content sections
- Overuse shadows or heavy borders

---

## Spacing System

### Section Padding
- Mobile: `py-12`
- Desktop: `py-16` to `py-20`

### Container
- Max width: `max-w-6xl` or `max-w-7xl`
- Padding: `px-4` (mobile) to `px-6` (desktop)

### Card Padding
- Small: `p-4`
- Medium: `p-6`
- Large: `p-8`

---

## Examples in Use

### Hero Section
- White background
- Grid pattern (3% opacity)
- Gradient orbs (top-right, bottom-left)
- Clean, professional

### Services Section
- White background
- No pattern
- Cards with slate-50 backgrounds
- Slate-200 borders

### Coupon Banner
- Cyan/turquoise gradient
- Subtle dot pattern
- White text
- Compact, eye-catching

### Footer
- Dark slate background (only dark section)
- Cyan accents
- White text
