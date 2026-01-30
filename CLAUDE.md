# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hayal Perdesi Organizasyon - A Next.js 14 website for a traditional Turkish shadow puppet (Karagöz Hacivat) event organization company. The site targets families with children in Çankırı, Karabük, and Rize regions.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header, Footer, WhatsApp button
│   ├── page.tsx            # Homepage
│   ├── etkinlikler/        # Events listing page
│   ├── bilet-al/           # Ticket purchase info (WhatsApp + venue sales)
│   ├── organizasyon/       # B2B info for malls/culture centers
│   ├── galeri/             # Photo gallery with category filters
│   ├── hakkimizda/         # About page
│   ├── iletisim/           # Contact page
│   └── kvkk/               # KVKK (Turkish GDPR) legal page
├── components/
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Site footer with links
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA (fixed position)
│   └── EventCard.tsx       # Event display card component
└── data/
    ├── events.ts           # Event data and helper functions
    └── gallery.ts          # Gallery images and categories
```

## Key Configuration

- **WhatsApp Number**: 905321770637
- **Instagram**: @hayalperdesiorganizasyon
- **Active Cities**: Çankırı, Karabük (Rize coming soon)
- **Reference Venue**: Leyla Dizdar Kültür Merkezi, Karabük

## Data Management

Events and gallery data are stored in `src/data/` as TypeScript files. To add/modify:

- **Events**: Edit `src/data/events.ts` - includes status ('active' | 'coming-soon')
- **Gallery**: Edit `src/data/gallery.ts` - includes category filtering

## WhatsApp Integration

The floating WhatsApp button uses a pre-filled message template:
```
Merhaba, Hayal Perdesi için bilet almak istiyorum.
Şehir:
Etkinlik:
Kişi sayısı:
AVM/Kültür Merkezi:
```

## Design Notes

- Mobile-first responsive design
- Purple/amber color scheme (brand colors)
- Turkish language content
- SEO metadata configured in layout.tsx
