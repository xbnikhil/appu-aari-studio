# Appu Aari Studio

Premium handmade Aari embroidery and bespoke embroidery studio based in Pune, Maharashtra, India.

## Overview

Appu Aari Studio is a premium, minimal website for a handmade Aari embroidery business serving women in Pune who appreciate elegant ethnic wear, detailed craftsmanship, bespoke designs, and personalised service.

The site communicates that every order is handmade by Appu with genuine interest, patience, care, and attention to detail. Customer satisfaction and craftsmanship matter more than accepting a high volume of orders.

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, philosophy, gallery, and CTA |
| `/our-story` | Our Story | Brand story about Appu and the craft |
| `/our-work` | Our Work | Editorial image gallery of embroidery work |
| `/the-process` | The Process | Six-step order journey |
| `/contact` | Contact | Enquiry form with availability notice |
| `*` | Not Found | Custom 404 page |

## Tech Stack

- React 19 + Vite
- React Router (client-side navigation, no full page reloads)
- Lucide React (minimal icons)
- Plain CSS (no CSS frameworks or animation libraries)

## Project Structure

```
appu-aari-studio/
├── public/
│   ├── images/           # Image assets (SVG placeholders, replace with photos)
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── CTASection.jsx
│   │   ├── ComplimentaryPickupBanner.jsx
│   │   ├── AvailabilityNotice.jsx
│   │   ├── EnquiryForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── ImageLightbox.jsx
│   │   ├── MobileNav.jsx
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   └── images.js     # Central image configuration
│   ├── pages/            # Route page components
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── OurStory.jsx
│   │   ├── OurWork.jsx
│   │   └── TheProcess.jsx
│   ├── styles/           # CSS styles
│   │   ├── main.css      # Design tokens & global styles
│   │   ├── components.css # Component-level styles
│   │   └── pages.css     # Page-level styles
│   ├── App.jsx           # Router & app shell
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Image Replacement

All images are configured centrally in `src/data/images.js`. To replace a placeholder with a real photograph:

1. Add your image file to `public/images/` (e.g. `public/images/hero-embroidery.jpg`)
2. Update the `src` in `src/data/images.js` to point to `/images/your-file.jpg`
3. Update the `alt` text as needed

Only `src/data/images.js` needs to be edited — all components import from this single file.

## Enquiry Form

The contact form at `/contact` includes client-side validation and a demo submission flow. Currently, on submission:
- The form validates required fields (name, phone, garment type, design description)
- Shows a success message instead of sending data (no backend connected)
- The submission logic is isolated in `src/components/EnquiryForm.jsx` inside the `handleSubmit` function

To connect a real backend, replace the `setTimeout` demo block in `handleSubmit` with an API call (e.g., `fetch` to your endpoint or a WhatsApp redirect).

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Principles

- **Minimal and premium**: Sharp 0px border-radius, fine borders, restrained colours
- **Editorial serif headings**: Cormorant Garamond for major headings, Inter for body
- **Warm ivory palette**: #FAF7F0 background with champagne gold accents
- **Mobile-first**: Responsive layouts that work on phones, tablets, and desktops
- **Accessibility**: Semantic HTML, visible focus states, accessible labels, keyboard-navigable lightbox
- **No fake claims**: No invented reviews, ratings, years of experience, or contact details

## Availability & Pickup

- New orders are accepted according to Appu's availability (no fake urgency)
- Complimentary pickup & drop-off is offered within Pune only
- No delivery promised outside Pune
