# AtlasGrowth Website

Dynamic business website generator built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ Dynamic routing by business slug (`/[slug]`)
- ✅ Full-page business websites with:
  - Hero section with background images
  - About section
  - Services overview (6 standard services)
  - Why Choose Us / Reviews section
  - Service Area with map
  - Footer with contact info
- ✅ SEO controls (noindex by default for previews)
- ✅ Brand colors from business logos
- ✅ Mobile responsive
- ✅ Supabase integration

## Running Locally

```bash
npm run dev
```

Visit http://localhost:3000

## Viewing a Business Page

Navigate to: `http://localhost:3000/[slug]`

Example: `http://localhost:3000/mr-drippy-plumbing`

## Project Structure

```
website/
├── app/
│   ├── [slug]/
│   │   └── page.tsx          # Dynamic business pages
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── ServiceAreaSection.tsx
│   └── Footer.tsx
├── lib/
│   └── supabase.ts            # Supabase client & types
├── utils/
│   ├── colors.ts              # Color utilities
│   └── business.ts            # Business data helpers
└── public/
    └── images/
        └── hero-backgrounds/  # Hero images
```

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Adding Custom Hero Images

1. Add images to `/public/images/hero-backgrounds/custom/`
2. Name them: `{slug}.jpg`
3. Or update `hero_image_url` field in database

## Database

Uses Supabase table: `businesses`

Key fields:
- `slug` - URL identifier
- `logo_primary_color` - Brand color for buttons/accents
- `logo_secondary_color` - Secondary brand color
- `is_live` - Whether business is live
- `is_seo_indexed` - Whether to allow indexing

## Deployment

Deploy to Vercel:
1. Connect GitHub repo
2. Add environment variables
3. Deploy!

Domain: atlasgrowth.ai

## Next Steps

- [ ] Add more hero background images
- [ ] Add service images
- [ ] Implement contact form
- [ ] Add gallery lightbox
- [ ] Pull real Google reviews via API
- [ ] Add admin panel for managing businesses
