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
      // Handle both with and without trailing slashes for WordPress compatibility
      {
        source: '/residential/plumbing-remodel/ada-compliant-bathroom/:path*',
        destination: '/services/fixture-installation/',
        permanent: true,
      },
      {
        source: '/new-construction-plumbing/:path*',
        destination: '/new-construction/',
        permanent: true,
      },
      {
        source: '/contact/about-us/:path*',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/commercial/drain-cleaning/snake-drain-cleaning/:path*',
        destination: '/services/drain-cleaning/',
        permanent: true,
      },
      {
        source: '/specials/:path*',
        destination: '/coupons/',
        permanent: true,
      },
      {
        source: '/residential/drain-cleaning/hydro-jetting/:path*',
        destination: '/services/drain-cleaning/',
        permanent: true,
      },
      {
        source: '/residential/plumbing-repipes/pex-pipes/:path*',
        destination: '/services/repipe/',
        permanent: true,
      },
      {
        source: '/residential/plumbing-repipes/copper-pipes/:path*',
        destination: '/services/repipe/',
        permanent: true,
      },
      {
        source: '/commercial/drain-cleaning/hydro-jet/:path*',
        destination: '/services/drain-cleaning/',
        permanent: true,
      },
      {
        source: '/residential/plumbing-repipes/:path*',
        destination: '/services/repipe/',
        permanent: true,
      },
      {
        source: '/all-county-plumbing-site-map/:path*',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/residential/drain-cleaning/drain-snake-cleaning/:path*',
        destination: '/services/drain-cleaning/',
        permanent: true,
      },
      {
        source: '/plumbing-contractor-reviews/:path*',
        destination: '/reviews/',
        permanent: true,
      },
      {
        source: '/commercial/drain-cleaning/:path*',
        destination: '/services/drain-cleaning/',
        permanent: true,
      },
      {
        source: '/shop/:path*',
        destination: '/contact/',
        permanent: true,
      },
      // Catch-all for remaining /residential/* to /services/* (must be last)
      {
        source: '/residential/:path*',
        destination: '/services/:path*',
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
