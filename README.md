# AtlasGrowth23 - Dynamic Business Website Generator

Generate beautiful, SEO-optimized websites for local businesses dynamically.

## Project Structure

```
/workspaces/atlasgrowth23/
├── .env.local              # Supabase credentials (DO NOT COMMIT)
├── data/                   # Final processed data
│   └── plumber_data_final.csv  # 394 businesses ready for use
├── docs/                   # Documentation
│   ├── PROJECT_DOCUMENTATION.md       # Complete project overview
│   └── WEBSITE_DESIGN_STRATEGY.md     # Design & implementation guide
├── scripts/                # One-time data processing scripts
│   ├── trim_csv.py
│   ├── process_logos.py
│   ├── generate_slugs.py
│   └── prepare_import.py
└── archive/                # Original/intermediate files (not needed)
```

## Quick Reference

### Database
- **Platform**: Supabase (PostgreSQL)
- **Table**: `businesses`
- **Records**: 394 plumber businesses in Birmingham, AL
- **Status**: All imported with `is_live=false`, `is_seo_indexed=false`

### Website URL Structure
- **Domain**: atlasgrowth.ai
- **Business Pages**: `atlasgrowth.ai/{slug}`
- **Example**: `atlasgrowth.ai/mr-drippy-plumbing`

### Key Features
- Dynamic routing by business slug
- Brand colors extracted from logos
- SEO controls (noindex by default)
- Multi-page websites per business
- Lead capture system

## Next Steps
1. Set up Next.js project
2. Create dynamic [slug] routing
3. Build home page template
4. Implement design system
5. Deploy to Vercel

## Documentation
See `/docs/` folder for complete guides.
