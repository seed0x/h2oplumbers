# All County Plumbers - AI Assistant Guidelines

## 🏗️ Project Overview
This is a Next.js 14 website for All County Plumbers, a plumbing company in Washington. The site uses the App Router pattern with a focus on performance, SEO, and lead generation.

### Business Context
All County Plumbers is a family-owned plumbing business operating since 2004, serving Vancouver, WA and surrounding areas. The website caters to:
- Residential customers seeking plumbing repairs and installations
- Commercial clients needing larger plumbing projects
- Construction companies requiring plumbing for new builds
- Emergency service requests that need immediate attention

### Key Features
- **Service Area Finder**: ZIP code validation with response time estimates
- **Online Booking System**: Calendar-based appointment scheduling
- **AI Plumbing Chatbot**: Intelligent customer service assistant
- **Cost Calculator**: Dynamic pricing estimation tool
- **Service Pages**: Detailed information on plumbing offerings
- **Lead Generation Forms**: Multiple contact points throughout the site

## 🧩 Key Architecture

### Frontend Architecture
- **App Router pattern**: Pages in `src/app/`, components in `src/components/`
  - Example: `src/app/services/water-heater-repair/page.tsx` for water heater service page
  - Dynamic routes like `src/app/service-areas/[slug]/page.tsx` for area-specific content
- **UI Component Library**: Standardized components in `src/components/ui/` using Tailwind + Radix primitives
  - Base components like `Button`, `Card`, `Input` follow shadcn/ui patterns
  - Each component uses `class-variance-authority` for consistent variant handling
- **Section Components**: Reusable page sections in `src/components/sections/`
  - Examples: `HomepageHero`, `TestimonialsSection`, `ServiceFeatures`
  - These compose multiple UI components into meaningful content blocks
- **Client/Server Split**: Most pages are server components, with client components used for interactive elements
  - Server components: Page layouts, static content sections, SEO metadata
  - Client components: Forms, interactive calculators, booking widgets (marked with "use client")

### Core Data Flow
1. **Site Configuration**:
   - `src/config/site.ts` defines central business data (phone, address, hours)
   - `src/config/services.ts` contains service offerings and descriptions
   - `src/config/brand-colors.ts` maintains the color palette reference
   - Example: `contactInfo.phone` is used throughout the site for consistent display

2. **Service Areas**:
   - `src/config/service-areas.ts` defines all service locations with ZIP codes
   - Dynamic service area pages generated from this configuration
   - Response times and availability calculations use this data
   - Example: Vancouver service area has defined ZIP codes: 98660, 98661, 98662, etc.

3. **API Layer**:
   - Next.js API routes in `src/app/api/` expose server functionality
   - `/api/booking` handles appointment scheduling
   - `/api/service-areas` provides ZIP code validation
   - `/api/contact` processes form submissions
   - Authentication via NextAuth.js through `/api/auth/[...nextauth]`

4. **Database Integration**:
   - Prisma ORM connects to PostgreSQL database
   - Schema defined in `prisma/schema.prisma`
   - Models include: `Booking`, `Contact`, `ServiceRequest`, `User`
   - Example query:
     ```typescript
     const bookings = await prisma.booking.findMany({
       where: { status: 'CONFIRMED' },
       include: { customer: true, service: true }
     });
     ```

## 🎨 Design System

### Color System
- **Brand colors**: Navy blue and red defined in `tailwind.config.ts`
  ```typescript
  colors: {
    navy: {
      50: '#f4f7fb',  // Lightest navy - backgrounds
      100: '#e9eff6', // Light navy - hover states
      // ... more shades
      600: '#3d618c', // Primary navy - main brand color
      // ... more shades
      950: '#1c2536', // Darkest navy - text on light backgrounds
    },
    red: {
      50: '#fff1f1',  // Lightest red - backgrounds
      // ... more shades
      500: '#f83b3b', // Primary red - CTA buttons
      600: '#e51d1d', // Darker red - hover states
      // ... more shades
      950: '#480707', // Darkest red - text on light backgrounds
    },
  }
  ```
- **Color scale**: Each color has shades from 50-950 following a consistent pattern
- **Semantic usage**:
  - Navy (`navy-600`): Primary brand color for headers, navigation, footer
  - Red (`red-500`): Call-to-action buttons, emergency services, important alerts
  - Neutral grays: Text, borders, backgrounds (use `gray-50` through `gray-900`)
  - Success/Error states: Green for success, Red for errors/warnings

### Typography
- **Font families**: 
  - Primary: Inter for body text (`font-sans`)
  - Display: Montserrat for headings (`font-heading`)
- **Type scale**:
  - Headings follow a consistent scale: h1 (4xl/5xl), h2 (3xl), h3 (2xl), h4 (xl)
  - Body text: Normal (base), Small (sm), Tiny (xs)
- **Font weights**:
  - Headings use `font-bold` (700)
  - Subheadings use `font-semibold` (600)
  - Body text uses `font-normal` (400) or `font-medium` (500) for emphasis

### Components
- **All UI components use `class-variance-authority` (cva) for variants**
  ```typescript
  // Example from button.tsx
  const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium...",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          // more variants...
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          // more sizes...
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )
  ```

- **Component Usage Examples**:
  ```tsx
  // Button variations
  <Button variant="default" size="lg">Schedule Service</Button>
  <Button variant="destructive" size="lg">Emergency Call</Button>
  <Button variant="outline" size="default">Learn More</Button>

  // Card patterns
  <Card>
    <CardHeader>
      <CardTitle>Water Heater Repair</CardTitle>
      <CardDescription>Fast, reliable repairs for all water heater types</CardDescription>
    </CardHeader>
    <CardContent>
      {/* Content here */}
    </CardContent>
    <CardFooter>
      <Button>Schedule Service</Button>
    </CardFooter>
  </Card>
  ```

### Layout Patterns
- **Container class**: Centered content with responsive padding
  ```tsx
  <div className="container mx-auto px-4 py-12">
    {/* Content here */}
  </div>
  ```
- **Grid system**: Using Tailwind's grid utilities
  ```tsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Grid items */}
  </div>
  ```
- **Section spacing**: Consistent vertical rhythm
  ```tsx
  <section className="py-12 md:py-16 lg:py-20">
    {/* Section content */}
  </section>
  ```
- **Responsive patterns**: Mobile-first approach with breakpoint modifiers
  - Default styles target mobile
  - Use `md:`, `lg:` prefixes for larger screens

## 🧪 Testing Patterns

### Unit Tests
- **Location**: Located in `__tests__/unit/` directory
- **Framework**: Jest with React Testing Library
- **Test Files**: Follow naming convention `[feature].test.ts` or `[component].test.tsx`
- **Common Tests**:
  - Form validation (`validation.test.ts`)
  - API rate limiting (`rate-limit.test.ts`)
  - Email sending (`email.test.ts`)
  - Cache operations (`cache.test.ts`)
  - External review fetching (`external-reviews.test.ts`)
  - Promotions calculations (`promotions.test.tsx`)
- **Running Unit Tests**:
  ```bash
  # Run all unit tests
  npm test
  
  # Run specific test
  npm test -- cache
  ```

### E2E Tests
- **Location**: `playwright-tests/` directory
- **Framework**: Playwright
- **Test Structure**:
  - `fixtures.ts` - Common test setup and utilities
  - Individual test files for key user flows:
    - `homepage.spec.ts` - Home page tests
    - `booking.spec.ts` - Booking system flow tests
    - `contact.spec.ts` - Contact form tests
    - `services.spec.ts` - Service page tests
    - `visual.spec.ts` - Visual regression tests
    - `smoke.spec.ts` - Basic smoke tests for critical pages
- **Running E2E Tests**:
  ```bash
  # Run all E2E tests
  npm run test:e2e
  
  # Run specific test
  npm run test:e2e -- --grep "booking"
  
  # Run with UI
  npm run test:e2e -- --ui
  ```

### Test Guidelines
- Each form component should have validation tests
- Critical user flows (booking, contact) require E2E test coverage
- API endpoints must include rate limit and validation tests
- Add visual tests for any new UI components

## 📱 Mobile Considerations

### Mobile-First Design
- Default styles should target mobile devices
- Use responsive utilities in ascending order (mobile → tablet → desktop)
```tsx
// Example of mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  {/* Content scales up from mobile to desktop */}
</div>
```

### Key Responsive Patterns
- **Container width**:
  ```tsx
  <div className="container px-4 md:px-6 lg:px-8">
  ```
- **Grid layouts**:
  ```tsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  ```
- **Stack → Row transitions**:
  ```tsx
  <div className="flex flex-col sm:flex-row gap-4">
  ```
- **Font sizing**:
  ```tsx
  <h1 className="text-3xl md:text-4xl lg:text-5xl">
  ```
- **Padding/margin**:
  ```tsx
  <section className="py-8 md:py-12 lg:py-16">
  ```

### Mobile Navigation
- Mobile menu uses slide-out drawer pattern
- Located in `src/components/layout/mobile-nav.tsx`
- Toggle controlled by `useState` hook for menu open state

### Testing Mobile Views
- Use Chrome DevTools or browser resize during development
- Playwright tests should include mobile viewports (defined in `playwright.config.ts`)
- Test on physical devices before production deployment
- Critical viewport sizes to test:
  - 375px width (iPhone SE)
  - 428px width (iPhone Max)
  - 768px width (Tablet)
  - 1024px width (Small desktop)

## 🚀 Deployment Workflow

### Hosting Platform
- Vercel is the production hosting platform
- Production URL: https://allcountyplumbers.com
- Preview deployments available for PRs

### CI/CD Pipeline
- GitHub Actions workflow in `.github/workflows/ci-cd.yml`
- **CI Process**:
  1. Code linting and type checking
  2. Unit tests with Jest
  3. E2E tests with Playwright
  4. Build verification
- **CD Process**:
  1. Auto-deploy to preview URL on PR
  2. Manual approval required for production deployment
  3. Post-deployment smoke tests

### Environment Variables
- Development: `.env.local` (not committed to repo)
- Production: Configured in Vercel dashboard
- Preview: Automatically set from repository secrets

**Required Environment Variables**:
```
# Database Connection
DATABASE_URL=postgresql://...

# API Keys
RESEND_API_KEY=re_...
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-...
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=...

# Redis Cache
UPSTASH_REDIS_URL=https://...
UPSTASH_REDIS_TOKEN=...

# Authentication
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

### Deployment Commands
```bash
# Local development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Deploy to production (via Vercel CLI)
vercel --prod
```

## 📄 Business Content Guidelines

### Brand Voice
- **Professional but approachable**: Expert advice without being intimidating
- **Family-oriented**: Emphasize family-owned business values
- **Solution-focused**: Focus on benefits, not just features
- **Transparent**: Clear pricing, straightforward explanations

### Business Information Consistency
- Always use central configuration from `src/config/site.ts` for:
  - Phone number: `contactInfo.phone` = "(360) 883-2506"
  - Email: `contactInfo.email` = "office@all-county-plumbing.net"
  - Address: `contactInfo.address` = "PO BOX 522, Battle Ground, WA 98604"
  - Business hours: `contactInfo.hours`
  - License numbers: `contactInfo.license`

### Service Terminology
- Use correct plumbing terminology but explain technical terms:
```tsx
<p>
  Our hydro-jetting service 
  <span className="text-sm text-gray-600">(high-pressure water cleaning)</span>
  removes tough blockages.
</p>
```

### Content Structure Guidelines
- **Page Titles**: H1 for main title, H2 for major sections, H3 for subsections
- **Service Pages**: Include problem → solution → benefits structure
- **CTAs**: Place booking CTAs after key benefits or pain points
- **Social Proof**: Include testimonials, reviews, or credentials
- **Accessibility**: Use descriptive alt text for images and aria labels where needed

## 🧠 Common Tasks

### Adding a New Page
1. Create file in `src/app/your-page/page.tsx` with the following structure:
```tsx
import { Metadata } from 'next';
import { generateSocialMeta } from '@/lib/social-meta';

export const metadata: Metadata = generateSocialMeta({
  title: "Page Title | All County Plumbers",
  description: "Concise page description goes here.",
  canonical: "/your-page"
});

export default function YourPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page content here */}
    </div>
  );
}
```

### Creating a New Component
1. Determine if component is UI-based (`src/components/ui/`), section-based (`src/components/sections/`), or feature-specific
2. Use appropriate naming conventions:
   - UI components: lowercase with dashes (`action-button.tsx`)
   - Section components: camelCase with descriptive names (`ServiceFeatures.tsx`)
3. Use Client/Server component pattern:
```tsx
// For interactive components
'use client';

import { useState } from 'react';

export function InteractiveComponent() {
  const [state, setState] = useState(initial);
  // Component code
}

// For server components (default, no directive needed)
export function StaticComponent() {
  // Component code
}
```

### Creating a New API Endpoint
Create a file in `src/app/api/your-endpoint/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  // Apply rate limiting
  const limiter = await rateLimit.check(request);
  if (!limiter.success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }
  
  try {
    // Handle request
    const data = await request.json();
    
    // Process data
    // ...
    
    // Return response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Update Business Information
1. Edit central configuration in `src/config/site.ts`
2. Update related references in:
   - `src/config/service-areas.ts` for service location changes
   - `src/config/services.ts` for service offering changes
   - `src/config/coupons.ts` for promotion updates

### Fix Design Inconsistencies
1. Check against reference components in `src/components/ui/`
2. Use design tokens from `tailwind.config.ts`
3. Follow mobile-first responsive patterns
4. Use consistent spacing scale (4px increments)

## ⚠️ Known Gotchas

### Form Handling
- Forms require **both** client-side and server-side validation
- Client validation with React Hook Form + Zod:
```tsx
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
});

type FormData = z.infer<typeof formSchema>;

const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: { name: "", email: "" },
});
```
- Server validation in API routes using Zod schema

### Image Optimization
- Always use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
  src="/images/plumber.jpg"
  alt="Plumber fixing a pipe"
  width={600}
  height={400}
  className="rounded-lg"
  priority={isHero} // For important above-the-fold images
/>
```

### Dynamic Routes
- Service area pages follow the pattern: `src/app/service-areas/[slug]/page.tsx`
- The slug must match the kebab-case format in `service-areas.ts`
- Example: "Vancouver, WA" → `vancouver-wa-plumber`

### Caching
- Redis cache may need updating when changing dynamic content
- Use the cache invalidation utility:
```typescript
import { cache } from '@/lib/cache';

// Invalidate specific cache key
await cache.invalidate('service-areas');

// Invalidate cache pattern
await cache.invalidatePattern('service:*');
```

### Authentication
- Admin pages require authentication via NextAuth.js
- Protected routes use middleware checks:
```tsx
export const dynamic = 'force-dynamic';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/api/auth/signin');
  }
  
  if (session.user.role !== 'ADMIN') {
    notFound();
  }
  
  // Admin content
}
```

## 📚 Reference Implementations

### Page Implementations
- **Homepage**: `src/app/page.tsx` - Main landing page with services overview
- **Service page**: `src/app/services/water-heater-repair/page.tsx` - Example service detail page
- **Dynamic route**: `src/app/service-areas/[slug]/page.tsx` - Template for service area pages

### Component Examples
- **Hero section**: `src/components/sections/homepage-hero.tsx` - Main hero banner pattern
- **Form handling**: `src/components/forms/contact-form.tsx` - Contact form with validation
- **Card grid**: `src/components/sections/services-grid.tsx` - Grid layout for service cards

### Data Fetching Patterns
- **Static data**: `src/app/services/page.tsx` - Using imported configuration
- **Dynamic data**: `src/app/service-areas/page.tsx` - Server-side data fetching
- **API route**: `src/app/api/service-areas/route.ts` - Backend data endpoint

### State Management
- **Client state**: `src/components/booking/booking-form.tsx` - React hooks for local state
- **Server state**: `src/app/api/booking/route.ts` - Database operations with Prisma
- **Shared state**: `src/components/providers.tsx` - Context providers for shared state