# Snap Scroll Animation System

## Overview
This is a professional, full-featured smooth scroll animation system built specifically for the H2O Plumbers homepage. It provides:

- **Section Snapping**: Each section snaps into view as users scroll
- **Responsive Design**: Separate optimized behaviors for desktop (wheel) and mobile (touch)
- **Smooth Animations**: GSAP-powered animations with scroll triggers
- **Navigation**: Visual progress bar and section navigation dots
- **Performance**: Hardware-accelerated, optimized for all devices

## Architecture

### Core Components

#### 1. `SnapScroll` (`src/components/ui/snap-scroll.tsx`)
The main scroll controller that handles:
- Desktop: Custom wheel-based scrolling with momentum detection
- Mobile: Native CSS snap scrolling for smooth touch behavior
- Section tracking and navigation dot updates

#### 2. `ScrollNavigation` (`src/components/ui/snap-scroll.tsx`)
Fixed navigation dots on the right side that:
- Show current section
- Allow clicking to jump to any section
- Update automatically as user scrolls
- Fully accessible with keyboard navigation

#### 3. `ScrollProgressBar` (`src/components/ui/snap-scroll.tsx`)
Top progress bar that:
- Shows scroll progress across entire page
- Gradient animation from cyan to turquoise
- Updates in real-time

#### 4. `SectionAnimation` (`src/components/ui/section-animations.tsx`)
Wrapper for animated content with multiple animation types:
- `fade` - Simple fade in
- `slide-up` - Slide up and fade in
- `slide-left` - Slide from left
- `slide-right` - Slide from right
- `scale` - Scale up and fade in
- `reveal` - 3D reveal effect

#### 5. `StaggerAnimation` (`src/components/ui/section-animations.tsx`)
Animates children elements in sequence with delay

#### 6. `AnimatedCounter` (`src/components/ui/section-animations.tsx`)
Number counter that animates from 0 to target value on scroll

#### 7. `PulsingCTA` (`src/components/ui/section-animations.tsx`)
Subtle breathing animation for call-to-action buttons

### Page Structure

#### `HomeContentSnap` (`src/components/pages/home-content-snap.tsx`)
The redesigned homepage with 6 full-height sections:

1. **Hero Section**: Large title, stats, CTAs with animated counters
2. **Services Section**: Three main service categories in cards
3. **Why Choose Us**: Four key benefits with icons
4. **Special Offer**: Full-screen promotional section
5. **Testimonials**: Customer reviews with ratings
6. **Final CTA**: Dark footer-style conversion section

Each section:
- Uses `snap-section` class for snapping
- Is `min-h-screen` for full viewport height
- Has responsive padding for mobile
- Contains conversion-focused CTAs

## Usage

### Adding to a Page

```tsx
import { HomeContentSnap } from '@/components/pages/home-content-snap';

export default function Page() {
  return <HomeContentSnap serviceHighlights={services} />;
}
```

### Using Animation Components

```tsx
// Basic section animation
<SectionAnimation animationType="slide-up" delay={0.2}>
  <h2>Your Content</h2>
</SectionAnimation>

// Staggered children
<StaggerAnimation staggerDelay={0.15}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerAnimation>

// Animated counter
<AnimatedCounter 
  endValue={5000} 
  suffix="+" 
  duration={2}
/>

// Pulsing CTA
<PulsingCTA>
  <button>Call Now</button>
</PulsingCTA>
```

### Creating New Sections

To add a new snap section:

```tsx
<section className="snap-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50">
  <div className="container mx-auto px-4">
    <SectionAnimation animationType="slide-up">
      <h2>Your Section Title</h2>
      <p>Your content...</p>
    </SectionAnimation>
  </div>
</section>
```

Important classes:
- `snap-section` - Required for snapping behavior
- `min-h-screen` - Full viewport height
- `flex items-center justify-center` - Center content vertically

## Desktop vs Mobile Behavior

### Desktop (≥768px)
- Custom wheel listener with momentum detection
- Prevents landing between sections
- Smooth GSAP animations between sections
- 1 second transition duration
- Debounced wheel events (50px threshold)

### Mobile (<768px)
- Native CSS scroll-snap for better touch performance
- Smoother finger tracking
- Better momentum scrolling
- Optimized for touch gestures
- No custom wheel handling

## Styling

### CSS Classes (in `globals.css`)

```css
/* Section snapping */
.snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

/* Navigation dots */
.scroll-nav-dot {
  /* Styles for inactive dots */
}

.scroll-nav-dot.active {
  /* Styles for active section dot */
}
```

### Custom Animations

The system uses GSAP's timeline and ScrollTrigger features:

```javascript
// Trigger animations when section enters viewport
scrollTrigger: {
  trigger: element,
  start: 'top 80%',
  end: 'top 20%',
  toggleActions: 'play none none reverse',
}
```

## Performance Optimizations

1. **Hardware Acceleration**: Uses `transform: translateZ(0)` and `backface-visibility: hidden`
2. **Will-Change**: Applied to animated elements
3. **Contain**: CSS containment on sections to prevent layout thrashing
4. **RequestAnimationFrame**: All animations use RAF for smooth 60fps
5. **Debouncing**: Wheel events are debounced to prevent over-triggering
6. **Lazy Animations**: Animations only trigger when scrolled into view

## Accessibility

- All navigation dots have proper ARIA labels
- Keyboard navigation supported (Tab + Enter)
- Focus indicators on all interactive elements
- Screen reader friendly section names
- Reduced motion support (respects user preferences)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Android 90+

## Customization

### Changing Snap Duration

In `snap-scroll.tsx`:
```typescript
gsap.to(window, {
  scrollTo: { y: sections[targetSection], autoKill: true },
  duration: 1, // Change this value (in seconds)
  ease: 'power2.inOut',
});
```

### Adjusting Wheel Sensitivity

In `snap-scroll.tsx`:
```typescript
const wheelThreshold = 50; // Increase for less sensitive, decrease for more sensitive
```

### Adding New Animation Types

In `section-animations.tsx`, add to `initialStates` and `finalStates`:
```typescript
const initialStates = {
  // ... existing
  myAnimation: { opacity: 0, rotate: 45 },
};

const finalStates = {
  // ... existing
  myAnimation: { opacity: 1, rotate: 0 },
};
```

## Troubleshooting

### Sections Not Snapping
- Ensure all sections have `snap-section` class
- Check that sections are direct children of body/main
- Verify GSAP plugins are registered

### Animations Not Triggering
- Check browser console for GSAP errors
- Verify ScrollTrigger is imported and registered
- Ensure sections have proper height (min-h-screen)

### Mobile Touch Issues
- Clear browser cache
- Check that native CSS snap is enabled
- Verify viewport meta tag in HTML head

### Performance Issues
- Reduce number of simultaneous animations
- Increase stagger delay
- Check for heavy elements in sections

## Future Enhancements

- [ ] Add horizontal snap scrolling option
- [ ] Keyboard shortcuts (arrow keys, Page Up/Down)
- [ ] Custom easing functions per section
- [ ] Section-specific transition durations
- [ ] Parallax layers within sections
- [ ] Video background support with scroll sync
- [ ] Progress indicators per section
- [ ] Section hash URLs for deep linking

## Credits

Built with:
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Lenis](https://github.com/studio-freight/lenis) - Smooth scroll (previous implementation)
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Next.js 14](https://nextjs.org/) - React framework
