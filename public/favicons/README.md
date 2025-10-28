## Favicons & App Icons

All favicon files should live at the root of `public/` (NOT inside this `favicons` folder) so they are served at `/<filename>`.

This folder only documents required assets and provides temporary storage while preparing them. After generation, move files up one level.

### Required Base Files (put in `public/` root)
favicon.ico
favicon.svg (optional but recommended for modern browsers)
favicon-16x16.png
favicon-32x32.png
favicon-48x48.png
favicon-96x96.png
favicon-192x192.png
favicon-512x512.png
apple-touch-icon.png (180x180)
mstile-150x150.png (optional for Windows tiles)
safari-pinned-tab.svg (monochrome mask icon)

### PWA Manifest Icons
Already referenced in `public/manifest.json` as `favicon-192x192.png` & `favicon-512x512.png`.

### Quick Generation (PNG sizes + apple-touch-icon)
1. Place a square 1024x1024+ source: `assets/favicon-source.png`
2. Run: `npm run generate-favicons`
3. Move generated files from `public/` (already placed) and add any missing SVG / mask icons manually.

### Using RealFaviconGenerator
1. Upload source.
2. Download package.
3. Copy ONLY the listed required files to `public/` root.
4. Ignore extra HTML snippet—handled by Next metadata config in `src/app/layout.tsx`.

### Verification
After running the dev server or deploying, manually open:
`/favicon.ico`, `/favicon-32x32.png`, `/apple-touch-icon.png`, `/favicon.svg`, `/manifest.json`.

### Color Guidelines
Primary: #2563eb (theme) or brand red #DC2626 background. Ensure contrast at 16px.

### Housekeeping
Delete temporary files inside this directory once root copies exist to avoid confusion.
