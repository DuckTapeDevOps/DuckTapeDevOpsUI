# Brand Assets

This directory contains brand-specific static assets that should be customized for each project.

## Required Assets

### Logo
- **File**: `logo.png` (or `.svg`, `.jpg`)
- **Usage**: Logo displayed in the navbar (top left) and throughout the site
- **Recommended size**: 200-400px width, transparent background preferred
- **Path**: `/brand/logo.png` (configured in `src/config/site.ts`)

### Favicon
- **File**: `favicon.ico`
- **Usage**: Browser tab icon
- **Recommended sizes**: 16x16, 32x32, 48x48 (multi-size .ico file)
- **Path**: `/brand/favicon.ico` (referenced in `index.html`)

### Hero Image/Banner
- **File**: `hero-image.jpeg` (or `.png`, `.svg`, `.jpg`)
- **Usage**: Main hero image/banner displayed on the homepage
- **Recommended size**: 800-1200px width, landscape orientation
- **Path**: `/brand/hero-image.jpeg` (configured in `src/config/site.ts`)

## File Placement

Place your brand assets directly in this directory:
```
landing/public/brand/
  ├── logo.png          (or .svg)
  ├── favicon.ico
  └── hero-image.png    (or .svg, .jpg)
```

## Path References

Assets in this directory are referenced via `/brand/` paths:
- Logo: `/brand/logo.png` (configured in `src/config/site.ts`)
- Favicon: `/brand/favicon.ico` (referenced in `index.html`)
- Hero image: `/brand/hero-image.jpeg` (configured in `src/config/site.ts`)

## Note

These assets are copied to the build output during the build process. Ensure all paths in your configuration use `/brand/` prefix.
