# Hero Background Images

## Directory Structure

```
hero-backgrounds/
├── plumber-default.jpg          (Required: Main fallback image)
├── plumber-default-2.jpg        (Optional: Alternate)
├── plumber-default-3.jpg        (Optional: Alternate)
└── custom/
    ├── {slug}.jpg               (Custom images per business)
    └── ...
```

## Image Requirements

- **Format**: JPG or PNG
- **Dimensions**: 1920x1080px minimum (16:9 aspect ratio recommended)
- **File size**: Optimize to < 500KB for fast loading
- **Content**: Professional plumbing imagery (trucks, tools, workers, etc.)

## Naming Convention

### Default Images
- `plumber-default.jpg` - Primary fallback
- `plumber-default-2.jpg` - Secondary option
- `plumber-default-3.jpg` - Tertiary option

### Custom Images
- Name using the business slug
- Example: `mr-drippy-plumbing.jpg`
- Check the `slug` field in the database

## Adding Images

1. **Default images**: Place in this directory
2. **Custom images**: Place in the `custom/` subdirectory
3. **Or**: Update the `hero_image_url` field in the database

## Image Overlay

All images have a dark gradient overlay (60-40% black) applied automatically to ensure text readability.

## Missing Images

If no custom image is found and no default exists, the page will show a plain colored background.
