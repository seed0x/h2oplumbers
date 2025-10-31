/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: true,
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'cdn.example.com'], // Add your image domains
    minimumCacheTTL: 86400, // 24 hours
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compression and optimization
  compress: true,
  
  // Enable experimental features for better performance  
  experimental: {
    scrollRestoration: true,
  },
  
  // Redirects from old WordPress site
  async redirects() {
    return [
      // === HIGH PRIORITY: Top Traffic Pages ===
      // Contact page variations
      {
        source: '/contact-us/:path*',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      
      // === SERVICE AREA REDIRECTS (Massive SEO opportunity) ===
      // Vancouver WA variations (40K+ impressions combined!)
      {
        source: '/vancouverwa/:path*',
        destination: '/service-areas/vancouver-wa-plumber/',
        permanent: true,
      },
      {
        source: '/vancouverw/:path*',
        destination: '/service-areas/vancouver-wa-plumber/',
        permanent: true,
      },
      {
        source: '/vancouvers/:path*',
        destination: '/service-areas/vancouver-wa-plumber/',
        permanent: true,
      },
      {
        source: '/vancouverf/:path*',
        destination: '/service-areas/vancouver-wa-plumber/',
        permanent: true,
      },
      {
        source: '/vancouverrepair/:path*',
        destination: '/service-areas/vancouver-wa-plumber/',
        permanent: true,
      },
      {
        source: '/vancouverwater/:path*',
        destination: '/service-areas/vancouver-wa-plumber/',
        permanent: true,
      },
      
      // === COMMERCIAL SERVICES ===
      {
        source: '/plumbingcommercial/:path*',
        destination: '/commercial/',
        permanent: true,
      },
      {
        source: '/drain/:path*',
        destination: '/services/drain-cleaning/',
        permanent: true,
      },
      {
        source: '/drainc/:path*',
        destination: '/services/drain-cleaning/',
        permanent: true,
      },
      
      // === RESIDENTIAL SERVICES ===
      {
        source: '/plumbing/:path*',
        destination: '/residential/',
        permanent: true,
      },
      {
        source: '/repipespecialists/:path*',
        destination: '/residential/plumbing-repipes/',
        permanent: true,
      },
      {
        source: '/repipevancouverwa/:path*',
        destination: '/residential/plumbing-repipes/',
        permanent: true,
      },
      {
        source: '/piping-repair/:path*',
        destination: '/residential/',
        permanent: true,
      },
      
      // === WATER HEATER SERVICES ===
      {
        source: '/boilermate-installation-and-service/:path*',
        destination: '/commercial/water-heater-services/',
        permanent: true,
      },
      
      // === COUPONS & SPECIALS ===
      {
        source: '/h2o-specials/:path*',
        destination: '/coupons/',
        permanent: true,
      },
      {
        source: '/special-offers/:path*',
        destination: '/coupons/',
        permanent: true,
      },
      {
        source: '/specials/:path*',
        destination: '/coupons/',
        permanent: true,
      },
      
      // === CUSTOMER PORTAL & RESOURCES ===
      {
        source: '/myh2o/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/resources/:path*',
        destination: '/',
        permanent: true,
      },
      
      // === BLOG & CONTENT ===
      {
        source: '/water-heater-maintenance-a-step-by-step-guide/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/repiping-project/:path*',
        destination: '/residential/plumbing-repipes/',
        permanent: true,
      },
      {
        source: '/leaky-faucets-and-valve-issues/:path*',
        destination: '/residential/',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/water-heaters/:path*',
        destination: '/commercial/water-heater-services/',
        permanent: true,
      },
      {
        source: '/category/all/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/repiping/:path*',
        destination: '/residential/plumbing-repipes/',
        permanent: true,
      },
      {
        source: '/category/fixtures/:path*',
        destination: '/residential/',
        permanent: true,
      },
      {
        source: '/tag/pex-pipe/:path*',
        destination: '/residential/plumbing-repipes/',
        permanent: true,
      },
      {
        source: '/tag/new-plumbing-pipe/:path*',
        destination: '/residential/plumbing-repipes/',
        permanent: true,
      },
      
      // === LEGACY & MISC ===
      {
        source: '/leadership/:path*',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/team/:path*',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/wpadmin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy-policy/',
        permanent: true,
      },
    ]
  },
  
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
