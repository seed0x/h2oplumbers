import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat } from "../lib/fonts";
import { Providers } from "./providers";
import { Logo } from "../components/ui/logo";
import { PlumbingChatbot } from "../components/chat/plumbing-chatbot";
import { ServiceWorkerProvider } from "../components/performance/service-worker-provider";
import { PerformanceMonitor, GoogleAnalytics, FacebookPixel } from "../components/analytics/tracking";
import { LocalBusinessStructuredData, PlumbingServiceStructuredData, FAQStructuredData } from "../components/seo/structured-data";
import { StickyHeader } from "../components/layout/sticky-header";
import { ErrorBoundary } from "../components/ui/error-boundary";
// import { EmailCapturePopup } from '@/components/ui/email-capture-popup'; // Disabled for better UX
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { PerformanceOptimizations, CriticalCSS } from '@/components/performance/performance-optimizations';
import { AccessibilityEnhancements } from '@/components/accessibility/accessibility-enhancements';
import { ErrorTracking } from '@/components/error/error-tracking';
import { generateSocialMeta, socialMetaTemplates, socialProfileSchema } from '@/lib/social-meta';
import { PromotionsProvider } from '@/context/PromotionsContext';
import { BUSINESS_DATA } from '@/lib/business-data';
// Smooth scroll now handled by SnapScroll component in pages

export const metadata: Metadata = generateSocialMeta({
  title: `${BUSINESS_DATA.name} | Licensed Plumbers in Southwest Washington`,
  description: `Trusted licensed plumbers serving Southwest Washington since ${BUSINESS_DATA.established}. Same-day service, drain cleaning, water heaters & more. Call ${BUSINESS_DATA.phone}.`,
  url: "/",
  image: "/images/social/homepage-social.jpg",
  type: "website",
  siteName: BUSINESS_DATA.name,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessData = {
    name: BUSINESS_DATA.name,
    description: "Professional plumbing services in Southwest Washington. Same-day repairs, drain cleaning, water heater installation, pipe repair and replacement for residential and commercial properties.",
    url: "https://h2oplumbers.com",
    telephone: BUSINESS_DATA.phoneRaw,
    email: BUSINESS_DATA.email,
    address: {
      streetAddress: BUSINESS_DATA.address.street,
      addressLocality: BUSINESS_DATA.address.city,
      addressRegion: BUSINESS_DATA.address.state,
      postalCode: BUSINESS_DATA.address.zip,
      addressCountry: "US"
    },
    geo: {
      latitude: 45.7812,
      longitude: -122.5334
    },
    openingHours: [
      "Mo-Fr 07:00-15:30",
      "Sa-Su 00:00-00:00"
    ],
    serviceArea: [
      "Vancouver", "Battle Ground", "Camas", "Washougal", 
      "Ridgefield", "La Center", "Woodland", "Longview", 
      "Clark County", "Southwest Washington"
    ],
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Check", "Financing"]
  };
  const bodyClassName = "light";

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="yql96FBwZtmlZF9KKnODppATUPZ0eJpj-DmD6E4eHeo" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preload critical hero image */}
        <link
          rel="preload"
          href="/images/family-Allcountyteam.webp"
          as="image"
          type="image/webp"
        />
        <CriticalCSS />
      </head>
  <body className={bodyClassName}>
        <ErrorTracking>
          <AccessibilityEnhancements>
            <PerformanceOptimizations>
          <PromotionsProvider>
          <Providers>
          <TopInfoBar />
          <StickyHeader />
          <ErrorBoundary>
            <main id="main-content" role="main" className="flex-grow">{children}</main>
          </ErrorBoundary>
          {/* <EmailCapturePopup /> */} {/* Disabled - too intrusive */}
          
          {/* H2O Drain Jingle Divider - Above Footer */}
          <section className="snap-section relative min-h-[50vh] flex items-center justify-center bg-white pt-12 pb-20">
            <div className="container mx-auto px-4">
              {/* Jingle Text with Musical Notes */}
              <div className="text-center relative mb-12">
                <div className="relative inline-block">
                  {/* Left musical note - animated */}
                  <span className="absolute -left-14 top-0 text-5xl text-brand-cyan animate-bounce" style={{ animationDuration: '2s' }}>🎵</span>
                  {/* Right musical note - animated */}
                  <span className="absolute -right-14 top-0 text-5xl text-brand-cyan animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }}>🎵</span>
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                    And Away Go Troubles<br />
                    <span className="text-brand-cyan">Down the Drain</span>
                  </h2>
                </div>
              </div>
              
              {/* Horizontal line with centered drain - positioned to overlap footer */}
              <div className="relative flex items-center justify-center">
                {/* Left line */}
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-400" />
                
                {/* Drain graphic - animated and overlapping footer */}
                <div className="relative mx-8 z-10" style={{ marginBottom: '-4rem' }}>
                  <div className="w-28 h-28 relative">
                    {/* Cyan glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-cyan via-brand-turquoise to-brand-cyan shadow-2xl opacity-20 blur-md animate-pulse" style={{ animationDuration: '3s' }} />
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 shadow-xl" />
                    {/* Inner ring */}
                    <div className="absolute inset-2 rounded-full bg-slate-700" />
                    {/* Drain grate */}
                    <div className="absolute inset-4 rounded-full bg-slate-900 border-2 border-slate-600">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-full h-0.5 bg-slate-600" />
                        <div className="absolute h-full w-0.5 bg-slate-600" />
                        <div className="absolute w-3/4 h-0.5 bg-slate-600 rotate-45" />
                        <div className="absolute w-3/4 h-0.5 bg-slate-600 -rotate-45" />
                      </div>
                      {/* Center hole with spinning water */}
                      <div className="absolute inset-5 rounded-full bg-black overflow-hidden">
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2.5s' }}>
                          <div className="absolute top-1/4 left-1/2 w-1 h-3 bg-brand-cyan/70 rounded-full blur-[1px]" />
                          <div className="absolute top-1/2 left-1/4 w-1 h-2 bg-brand-turquoise/60 rounded-full blur-[1px]" />
                          <div className="absolute bottom-1/4 right-1/3 w-1 h-2 bg-brand-cyan/50 rounded-full blur-[1px]" />
                        </div>
                      </div>
                    </div>
                    {/* Animated water droplets */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-brand-cyan to-brand-turquoise rounded-full shadow-lg animate-[drip_2s_ease-in_infinite]" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-brand-cyan to-brand-turquoise rounded-full shadow-lg animate-[drip_2s_ease-in_infinite] opacity-70" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                
                {/* Right line */}
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-400" />
              </div>
            </div>
          </section>
          
          <footer role="contentinfo" className="snap-section min-h-screen flex items-start justify-center bg-slate-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Company */}
                <div>
                  <div className="mb-5">
                    <Logo size="lg" variant="white" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-xs">
                    Trusted, licensed plumbing professionals serving Southwest Washington since {BUSINESS_DATA.established}.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1 mb-4">
                    <li className="font-medium">{BUSINESS_DATA.licenses.wa}</li>
                    <li className="font-medium">{BUSINESS_DATA.licenses.or}</li>
                  </ul>
                  <p className="text-xs text-slate-400 font-medium">BBB Accredited Business</p>
                </div>
                {/* Services */}
                <div>
                  <h3 className="text-sm font-heading font-bold tracking-wide uppercase mb-5 text-white">Services</h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      { label: 'Same-Day Service', href: '/services/emergency-plumbing' },
                      { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
                      { label: 'Water Heaters', href: '/services/water-heater-repair' },
                      { label: 'Camera Inspection', href: '/services/camera-scope-inspections' },
                      { label: 'Repipe Services', href: '/services/repipe' },
                      { label: 'Sewer Line Repair', href: '/services/sewer-line-repair' },
                      { label: 'Fixture Installation', href: '/services/fixture-installation' },
                      { label: 'New Construction', href: '/new-construction' },
                      { label: 'Commercial Services', href: '/commercial' }
                    ].map(link => (
                      <li key={link.href}>
                        <a href={link.href} className="text-slate-300 hover:text-brand-cyan transition-colors">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Service Areas */}
                <div>
                  <h3 className="text-sm font-heading font-bold tracking-wide uppercase mb-5 text-white">Service Areas</h3>
                  <ul className="space-y-2 text-sm text-slate-300 max-h-56 overflow-y-auto pr-2">
                    {[
                      { city: 'Vancouver, WA', href: '/service-areas/vancouver-wa-plumber' },
                      { city: 'Battle Ground, WA', href: '/service-areas/battle-ground-plumber' },
                      { city: 'Camas, WA', href: '/service-areas/camas-plumber' },
                      { city: 'Washougal, WA', href: '/service-areas/washougal-plumber' },
                      { city: 'Ridgefield, WA', href: '/service-areas/ridgefield-plumber' },
                      { city: 'La Center, WA', href: '/service-areas/la-center-plumber' },
                      { city: 'Woodland, WA', href: '/service-areas/woodland-plumber' },
                      { city: 'Longview, WA', href: '/service-areas/longview-plumber' },
                      { city: 'Kalama, WA', href: '/service-areas' },
                      { city: 'Salmon Creek, WA', href: '/service-areas' },
                      { city: 'Hazel Dell, WA', href: '/service-areas' },
                      { city: 'Yacolt, WA', href: '/service-areas' }
                    ].map(area => (
                      <li key={area.city}>
                        <a href={area.href} className="hover:text-brand-cyan transition-colors">{area.city}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Contact */}
                <div>
                  <h3 className="text-sm font-heading font-bold tracking-wide uppercase mb-5 text-white">Contact</h3>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li><span className="font-heading font-semibold text-white">Phone:</span> <a href="tel:+13608832506" className="hover:text-brand-cyan transition-colors">{BUSINESS_DATA.phone}</a></li>
                    <li><span className="font-heading font-semibold text-white">Email:</span> <a href="mailto:office@h2oplumbers.com" className="hover:text-brand-cyan transition-colors">{BUSINESS_DATA.email}</a></li>
                    <li><span className="font-heading font-semibold text-white">Address:</span> {BUSINESS_DATA.address.full}</li>
                    <li><span className="font-heading font-semibold text-white">Hours:</span> {BUSINESS_DATA.hours.display}</li>
                  </ul>
                  <div className="social-links flex gap-4 mt-6">
                    <a
                      href="https://facebook.com/AllCountyPlumbers"
                      aria-label="Facebook"
                      className="w-9 h-9 bg-[hsl(var(--brand-cyan))] hover:bg-[hsl(var(--brand-cyan-dark))] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.41V9.41c0-2.38 1.42-3.69 3.59-3.69 1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.9h-2.22V22c4.78-.8 8.44-4.94 8.44-9.93Z"/></svg>
                    </a>
                    <a
                      href="https://instagram.com/PlumberVancouverWA"
                      aria-label="Instagram"
                      className="w-9 h-9 bg-[hsl(var(--brand-cyan))] hover:bg-[hsl(var(--brand-cyan-dark))] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.65 0 3 1.35 3 3v10c0 1.66-1.35 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.65 1.34-3 3-3h10Zm-5 3.5A5.5 5.5 0 0 0 6.5 13 5.5 5.5 0 0 0 12 18.5 5.5 5.5 0 0 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 0 1 15.5 13 3.5 3.5 0 0 1 12 16.5 3.5 3.5 0 0 1 8.5 13 3.5 3.5 0 0 1 12 9.5Zm4.75-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-6 text-center text-xs text-slate-400">
                <p className="mb-2">© 2024 H2O Plumbing | <a href="/privacy" className="hover:text-brand-cyan transition-colors">Privacy Policy</a> | <a href="/terms" className="hover:text-brand-cyan transition-colors">Terms</a> | <a href="/sitemap.xml" className="hover:text-brand-cyan transition-colors">Sitemap</a></p>
                <p>All content © H2O Plumbing. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </Providers>
        </PromotionsProvider>
        </PerformanceOptimizations>
        </AccessibilityEnhancements>
        </ErrorTracking>
        <PlumbingChatbot />
  {/* Temporarily disable structured data until runtime error resolved */}
  {/* <LocalBusinessStructuredData /> */}
        <PlumbingServiceStructuredData />
        <FAQStructuredData />
        
        {/* Social Profile Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(socialProfileSchema) }}
        />
        
        <PerformanceMonitor />
        {/* Google Analytics - Add your GA4 Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {/* Facebook Pixel - Add your Pixel ID */}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID} />
        )}
        <ServiceWorkerProvider />
      </body>
    </html>
  );
}


