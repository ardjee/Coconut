# Ikos Andalusia - Next.js Implementation

## Overview
This is a recreation of the Ikos Andalusia resort website using Next.js, Tailwind CSS, and shadcn/ui components.

## Design System

### Colors
- **Sand**: Beige/cream tones (#F8F7F5 to #969586)
- **Charcoal**: Dark grays (#64737C to #22292B)
- **Ocean**: Teal accent (#1D95A4)

### Typography
- Font family: System fonts (fallback for NewHero custom font)
- Sizes: 10px to 77px with specific line heights and letter spacing
- Weight: Primarily light/thin for elegant feel

### Spacing
- Mobile-first responsive containers
- Breakpoints: 576px, 768px, 992px, 1200px, 1400px, 1500px+

### Animations
- Fade in/out effects
- Subtle translate animations
- Slow parallax scrolling
- All animations are subtle and performance-optimized

## Components Created

### Layout Components
1. **Header** (`src/components/layout/Header.tsx`)
   - Sticky navigation with scroll effects
   - Transparent overlay for hero section
   - Mobile responsive with sheet menu
   - Dropdown submenus

2. **Footer** (`src/components/layout/Footer.tsx`)
   - Newsletter/app download section
   - Footer navigation with submenus
   - Social media links
   - Copyright information

### Page Components
1. **Homepage** (`src/app/page.tsx`)
   - Hero section with full-screen image
   - Section headers with parallax text
   - Image galleries
   - Content sections (Sophistication, Rooms, Restaurants, Pools, Experiences, Testimonial, Destination, Location)
   - Intersection Observer for scroll animations

## Features Implemented

✅ Mobile-first responsive design
✅ Sticky header with scroll effects
✅ Transparent header overlay on hero
✅ Subtle fade and translate animations
✅ Intersection Observer for scroll-triggered animations
✅ Premium beach resort aesthetic
✅ Reusable component architecture
✅ Tailwind CSS with custom design tokens
✅ shadcn/ui components integration

## Running the Project

```bash
cd coconutbeach
npm install
npm run dev
```

Visit `http://localhost:3000` (or the port shown in terminal)

## Next Steps

To complete the full website recreation:

1. **Add Custom Fonts**: Download and add NewHero font family
2. **Add Real Images**: Replace placeholder images with actual resort photos
3. **Create Additional Pages**:
   - `/accommodation` - Rooms and suites
   - `/restaurants` - Dining options
   - `/activities` - Resort activities
   - `/spa` - Spa services
   - `/kids` - Children's facilities
   - `/entertainment` - Entertainment options
   - `/local-discovery` - Local area information

4. **Enhanced Features**:
   - Image slider/carousel for hero section
   - Interactive resort map
   - Room booking integration
   - Multi-language support
   - Video backgrounds
   - Advanced image galleries

5. **Performance Optimization**:
   - Image optimization with Next.js Image component
   - Lazy loading
   - Code splitting
   - SEO optimization

## Design Principles Followed

- ✅ Calm, premium beach resort aesthetic
- ✅ No new colors outside defined tokens
- ✅ Mobile-first, responsive by default
- ✅ Subtle animations only (fade, slight translate)
- ✅ Reusable components
- ✅ Matches reference look and feel
- ✅ Performance-optimized approach

## File Structure

```
coconutbeach/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with Ikos design tokens
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Header component
│   │   │   └── Footer.tsx        # Footer component
│   │   └── ui/                   # shadcn/ui components
│   └── lib/
│       └── utils.ts              # Utility functions
├── tailwind.config.ts            # Tailwind configuration with Ikos tokens
└── PROJECT_RULES.md              # Project guidelines
```
