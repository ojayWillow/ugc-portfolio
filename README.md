# UGC Portfolio

A stunning portfolio website for UGC (User-Generated Content) creators, built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Aceternity UI** components.

## ✨ Features

- **Hero Section** — Spotlight effect with animated gradient background
- **Video Showcase** — 9:16 vertical video grid with play overlays
- **Photo Gallery** — Infinite scrolling photo carousel (bi-directional)
- **Brand Collaborations** — Glowing hover cards for each brand partnership
- **About** — Clean bio section with skills/services tags
- **Contact** — Full contact form with social links
- **Floating Navbar** — Glassmorphism navigation bar

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── VideoShowcase.tsx
│   │   ├── PhotoGallery.tsx
│   │   ├── BrandCollaborations.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── spotlight.tsx
│       ├── infinite-moving-cards.tsx
│       ├── direction-aware-hover.tsx
│       └── glowing-card.tsx
└── lib/
    └── utils.ts
```

## 🎨 Customization

1. **Colors** — Edit `brand` colors in `tailwind.config.ts`
2. **Content** — Replace placeholder data in each section component
3. **Assets** — Add videos, photos, and logos to `/public/`
4. **Name/Bio** — Update text in `Hero.tsx`, `About.tsx`, and `Footer.tsx`

## 📦 Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Aceternity UI](https://ui.aceternity.com/) — Beautiful components

## 🚢 Deployment

Deploy instantly on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

Made with ❤️
