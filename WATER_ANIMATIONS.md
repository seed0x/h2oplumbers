# Water Animations for H2O Plumbing 🌊

I've created **4 different water animation effects** that you can use throughout the H2O Plumbing website. Each has a different look and performance profile.

## Available Animations

### 1. **WaterAnimation** - Falling Water Droplets 💧
Beautiful animated water droplets that fall down the screen with realistic 3D effects.

**Best for:** Homepage hero section, main pages
**Performance:** Medium (uses Canvas API)

```tsx
import { WaterAnimation } from '@/components/ui/water-animation';

<WaterAnimation />
```

### 2. **WaterRipples** - Expanding Ripple Effects 🌀
Gentle ripples that expand across the screen, like water droplets hitting a surface.

**Best for:** Service pages, about page
**Performance:** Medium (uses Canvas API)

```tsx
import { WaterRipples } from '@/components/ui/water-animation';

<WaterRipples />
```

### 3. **WaterGradientFlow** - Subtle Gradient Flow ✨ **RECOMMENDED**
Very subtle, elegant flowing gradient effect. Best for overall site background.

**Best for:** Global layout, all pages
**Performance:** Very light (CSS-only)

```tsx
import { WaterGradientFlow } from '@/components/ui/water-animation';

<WaterGradientFlow />
```

### 4. **WaterGradientFlowMedium** - Medium Gradient Flow 🌊
More noticeable than the subtle version with enhanced opacity and additional horizontal flow. Still professional and elegant.

**Best for:** Homepage, feature sections, hero areas
**Performance:** Very light (CSS-only)

```tsx
import { WaterGradientFlowMedium } from '@/components/ui/water-animation';

<WaterGradientFlowMedium />
```

## How to Implement

### Option 1: Add to Homepage Only

Edit `src/app/page.tsx`:

```tsx
import { WaterAnimation } from '@/components/ui/water-animation';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Water animation in background */}
      <WaterAnimation />
      
      {/* Your existing content */}
      <div className="relative z-10">
        {/* Hero section, services, etc. */}
      </div>
    </div>
  );
}
```

### Option 2: Add to All Pages (Recommended)

Edit `src/app/layout.tsx` and add inside the `<body>` tag:

```tsx
import { WaterGradientFlow } from '@/components/ui/water-animation';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* Subtle water effect on all pages */}
        <WaterGradientFlow />
        
        {/* Rest of your layout */}
        <TopInfoBar />
        <StickyHeader />
        <main>{children}</main>
        <footer>...</footer>
      </body>
    </html>
  );
}
```

### Option 3: Mix and Match

Use different effects on different pages:

**Homepage:**
```tsx
<WaterAnimation />  // Dramatic falling droplets
```

**Service Pages:**
```tsx
<WaterRipples />  // Subtle ripples
```

**Contact/Booking:**
```tsx
<WaterWaves />  // Ocean waves
```

**All Pages Background:**
```tsx
<WaterGradientFlow />  // Subtle gradient (always on)
```

## Quick Start - Add to Homepage Now

1. Open `src/app/page.tsx`
2. Add this import at the top:
   ```tsx
   import { WaterAnimation } from '@/components/ui/water-animation';
   ```
3. Add `<WaterAnimation />` right after your opening `<div>` or `<section>`
4. Save and view your site!

## Customization Options

### Adjust Opacity
Make the effect more or less subtle:

```tsx
<div style={{ opacity: 0.3 }}>
  <WaterAnimation />
</div>
```

### Change Colors
Edit `src/components/ui/water-animation.tsx` and change the H2O blue colors:
- `rgba(0, 163, 217, ...)` - Main H2O blue
- `rgba(0, 184, 230, ...)` - Lighter variant

### Adjust Speed
In the component file:
- **Droplets**: Change `speed: 0.5 + Math.random() * 1.5` (line 39)
- **Ripples**: Change `speed: 2 + Math.random() * 2` (line 140)
- **Waves**: Change `dur="10s"` in the SVG animate tags

## Performance Notes

- ✅ **All animations are client-side only** (won't affect server rendering)
- ✅ **They clean up properly** when components unmount
- ✅ **GPU-accelerated** where possible
- ✅ **Responsive** - automatically adjust to screen size

### Performance Rankings (Best to Heaviest):
1. **WaterGradientFlow** - CSS only, virtually no performance cost
2. **WaterWaves** - SVG animations, very light
3. **WaterRipples** - Canvas, moderate
4. **WaterAnimation** - Canvas with many elements, moderate

## My Recommendation

For the best user experience, I recommend:

```tsx
// In layout.tsx - applies to all pages
<WaterGradientFlow />

// In homepage hero section only
<WaterAnimation />
```

This gives you:
- Subtle water effect throughout the site ✅
- Dramatic effect on the homepage to wow visitors ✅
- Great performance ✅
- Perfect H2O branding ✅

## Preview

All animations use H2O's signature blue colors:
- **Primary**: #00A3D9 (water drop blue)
- **Light**: Various transparencies for depth

They're all subtle enough to not distract from content, but noticeable enough to reinforce the water/plumbing brand! 🌊💧
