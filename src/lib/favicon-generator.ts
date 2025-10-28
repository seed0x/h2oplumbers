export function generateFavicons() {
  // This would typically be run as a build script to generate various favicon sizes
  const faviconSizes = [16, 32, 48, 64, 96, 128, 192, 256, 384, 512];
  
  return faviconSizes.map(size => ({
    size: `${size}x${size}`,
    href: `/favicons/favicon-${size}x${size}.png`,
    type: 'image/png'
  }));
}

// Generate Apple touch icons
export function generateAppleTouchIcons() {
  const appleSizes = [57, 60, 72, 76, 114, 120, 144, 152, 180];
  
  return appleSizes.map(size => ({
    size: `${size}x${size}`,
    href: `/favicons/apple-touch-icon-${size}x${size}.png`,
    rel: 'apple-touch-icon'
  }));
}

// Updated manifest.json content
export const webManifest = {
  name: "All County Plumbing - Professional Plumbing Services",
  short_name: "All County Plumbing",
  description: "Professional plumbing services in Battle Ground, WA. Family-owned and licensed since 2004.",
  start_url: "/",
  display: "standalone",
  background_color: "#DC2626", // Brand red
  theme_color: "#DC2626",
  orientation: "portrait-primary",
  categories: ["business", "utilities"],
  icons: [
    {
      src: "/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/favicons/favicon-256x256.png",
      sizes: "256x256",
      type: "image/png"
    },
    {
      src: "/favicons/favicon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  shortcuts: [
    {
      name: "Call Now",
      short_name: "Call",
      description: "Call All County Plumbing immediately",
      url: "tel:+13608832506",
      icons: [{ src: "/favicons/shortcut-call.png", sizes: "96x96" }]
    },
    {
      name: "Book Online",
      short_name: "Book",
      description: "Schedule plumbing service online",
      url: "/booking",
      icons: [{ src: "/favicons/shortcut-book.png", sizes: "96x96" }]
    },
    {
      name: "Emergency Service",
      short_name: "Emergency",
      description: "24/7 emergency plumbing service",
      url: "/services/emergency-plumbing",
      icons: [{ src: "/favicons/shortcut-emergency.png", sizes: "96x96" }]
    }
  ]
};

// Browser config for Windows tiles
export const browserConfig = {
  msapplication: {
    TileColor: "#DC2626",
    TileImage: "/favicons/mstile-144x144.png",
    square70x70logo: "/favicons/mstile-70x70.png",
    square150x150logo: "/favicons/mstile-150x150.png",
    wide310x150logo: "/favicons/mstile-310x150.png",
    square310x310logo: "/favicons/mstile-310x310.png"
  }
};
