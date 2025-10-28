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
import { EmailCapturePopup } from '@/components/ui/email-capture-popup';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { PerformanceOptimizations, CriticalCSS } from '@/components/performance/performance-optimizations';
import { AccessibilityEnhancements } from '@/components/accessibility/accessibility-enhancements';
import { ErrorTracking } from '@/components/error/error-tracking';
import { generateSocialMeta, socialMetaTemplates, socialProfileSchema } from '@/lib/social-meta';
import { PromotionsProvider } from '@/context/PromotionsContext';
import { BUSINESS_DATA } from '@/lib/business-data';

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
          <EmailCapturePopup />
          <footer role="contentinfo" className="bg-slate-900 text-white pt-16 pb-10">
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
                      { label: 'Leak Detection', href: '/services/leak-detection' },
                      { label: 'New Construction', href: '/new-construction' },
                      { label: 'Commercial Services', href: '/commercial' }
                    ].map(link => (
                      <li key={link.href}>
                        <a href={link.href} className="text-slate-300 hover:text-brand-red transition-colors">{link.label}</a>
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
                        <a href={area.href} className="hover:text-brand-red transition-colors">{area.city}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Contact */}
                <div>
                  <h3 className="text-sm font-heading font-bold tracking-wide uppercase mb-5 text-white">Contact</h3>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li><span className="font-heading font-semibold text-white">Phone:</span> <a href="tel:+13608832506" className="hover:text-brand-red transition-colors">{BUSINESS_DATA.phone}</a></li>
                    <li><span className="font-heading font-semibold text-white">Email:</span> <a href="mailto:office@h2oplumbers.com" className="hover:text-brand-red transition-colors">{BUSINESS_DATA.email}</a></li>
                    <li><span className="font-heading font-semibold text-white">Address:</span> {BUSINESS_DATA.address.full}</li>
                    <li><span className="font-heading font-semibold text-white">Hours:</span> {BUSINESS_DATA.hours.display}</li>
                  </ul>
                  <div className="social-links flex gap-4 mt-6">
                    <a
                      href="https://facebook.com/AllCountyPlumbers"
                      aria-label="Facebook"
                      className="w-9 h-9 bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red-dark))] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.41V9.41c0-2.38 1.42-3.69 3.59-3.69 1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.9h-2.22V22c4.78-.8 8.44-4.94 8.44-9.93Z"/></svg>
                    </a>
                    <a
                      href="https://instagram.com/PlumberVancouverWA"
                      aria-label="Instagram"
                      className="w-9 h-9 bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red-dark))] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.65 0 3 1.35 3 3v10c0 1.66-1.35 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.65 1.34-3 3-3h10Zm-5 3.5A5.5 5.5 0 0 0 6.5 13 5.5 5.5 0 0 0 12 18.5 5.5 5.5 0 0 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 0 1 15.5 13 3.5 3.5 0 0 1 12 16.5 3.5 3.5 0 0 1 8.5 13 3.5 3.5 0 0 1 12 9.5Zm4.75-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-6 text-center text-xs text-slate-400">
                <p className="mb-2">© 2024 H2O Plumbing | <a href="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</a> | <a href="/terms" className="hover:text-brand-red transition-colors">Terms</a> | <a href="/sitemap.xml" className="hover:text-brand-red transition-colors">Sitemap</a></p>
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
        <ServiceWorkerProvider />
      </body>
    </html>
  );
}


