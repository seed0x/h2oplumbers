// H2O Plumbing Color System
export const brandColors = {
  // Primary brand colors (logo water drop blue)
  primary: {
    50: '#e0f7ff',   // Lightest cyan
    100: '#b3edff',
    200: '#80ddff',
    300: '#4dd3ff',
    400: '#1ac5ff',
    500: '#00A3D9',  // Main brand blue (logo water drop)
    600: '#0092c4',  // Slightly darker
    700: '#0082af',  // Hover state
    800: '#00719a',
    900: '#005a7a',  // Dark variant
  },
  
  // Secondary accent colors (lighter blue highlights)
  secondary: {
    50: '#e0f9ff',
    100: '#c2f0ff',
    200: '#99e6ff',
    300: '#66dbff',
    400: '#33d0ff',
    500: '#00b8e6',  // Lighter blue accent
    600: '#00a6cc',
    700: '#0094b3',  // Hover state
    800: '#008299',
    900: '#006b7a',
  },
  
  // Success/Phone actions (keep green for calls to action)
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#10b981',  // Main success green
    600: '#059669',
    700: '#047857',  // Hover state
    800: '#065f46',
    900: '#064e3b',
  },
  
  // Neutral grays (black to white from logo)
  gray: {
    50: '#f8fafc',   // Nearly white
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',  // Medium gray
    600: '#475569',
    700: '#334155',
    800: '#1e293b',  // Dark gray (logo gray)
    900: '#0f172a',  // Near black
  },
  
  // Black and white from logo
  black: '#000000',
  white: '#ffffff',
};

// Logo color variants for different backgrounds
export const logoVariants = {
  default: {
    colors: ['#1e3a8a', '#2563eb'], // Blue gradient
    background: 'transparent'
  },
  white: {
    colors: ['#ffffff', '#f8fafc'], // White with subtle tint
    background: 'transparent'
  },
  dark: {
    colors: ['#1f2937', '#374151'], // Dark grays
    background: 'transparent'
  },
  monochrome: {
    colors: ['#000000', '#4b5563'], // Black to gray
    background: 'transparent'
  }
};

// Favicon configurations
export const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

// Apple touch icon sizes
export const appleTouchIconSizes = [
  { size: 57, name: 'apple-touch-icon-57x57.png' },
  { size: 60, name: 'apple-touch-icon-60x60.png' },
  { size: 72, name: 'apple-touch-icon-72x72.png' },
  { size: 76, name: 'apple-touch-icon-76x76.png' },
  { size: 114, name: 'apple-touch-icon-114x114.png' },
  { size: 120, name: 'apple-touch-icon-120x120.png' },
  { size: 144, name: 'apple-touch-icon-144x144.png' },
  { size: 152, name: 'apple-touch-icon-152x152.png' },
  { size: 180, name: 'apple-touch-icon-180x180.png' },
];

// Generate CSS custom properties for brand colors
export const generateCSSVariables = () => {
  let cssVars = ':root {\n';
  
  Object.entries(brandColors).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      cssVars += `  --color-${colorName}-${shade}: ${value};\n`;
    });
  });
  
  cssVars += '}\n';
  return cssVars;
};

// Utility function to get contrasting text color
export const getContrastColor = (backgroundColor: string): string => {
  // Remove # if present
  const color = backgroundColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return white for dark backgrounds, dark for light backgrounds
  return luminance > 0.5 ? brandColors.gray[800] : '#ffffff';
};

// Generate gradient backgrounds for fallbacks
export const generateGradientBackground = (type: 'primary' | 'secondary' | 'success' = 'primary') => {
  const colorMap = {
    primary: [brandColors.primary[600], brandColors.primary[800]],
    secondary: [brandColors.secondary[500], brandColors.secondary[700]], 
    success: [brandColors.success[500], brandColors.success[700]],
  };
  
  const colors = colorMap[type];
  return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
};

// CSS patterns for fallback backgrounds
export const cssPatterns = {
  diagonal: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
  
  dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
  
  hexagons: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  
  circuit: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M20 20h40v40H20V20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/svg%3E")`
};

const brandConfig = {
  brandColors,
  logoVariants,
  faviconSizes,
  appleTouchIconSizes,
  generateCSSVariables,
  getContrastColor,
  generateGradientBackground,
  cssPatterns
};

export default brandConfig;


