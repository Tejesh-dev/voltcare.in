# VOLTCARE Electrical Solutions — Official Website

> Professional website for VOLTCARE Electrical Solutions — a trusted electrical consulting, contracting, and advisory firm founded by **Tejesh Mulchand Bhagat** in 1994 (Gondia) and expanded to Nagpur in 2019.

## 🔧 Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type-safe codebase
- **Vite 5** — Fast dev server & build tool
- **Tailwind CSS v3** — Utility-first styling
- **shadcn/ui** — Accessible UI components
- **Lucide React** — Icon library
- **React Router** — Client-side routing

## 📁 Project Structure

```
src/
├── assets/              # Hero images and static assets
├── components/
│   ├── Navbar.tsx        # Fixed top navigation with mobile hamburger menu
│   ├── HeroSection.tsx   # Auto-sliding hero with Ken Burns effect
│   ├── ServicesSection.tsx # 8 electrical services in a grid
│   ├── AboutSection.tsx  # Company info, founder details, stats, platform links
│   ├── PricingSection.tsx # Residential/Commercial/Industrial pricing cards
│   ├── ContactSection.tsx # Contact info + Google Form embed
│   ├── Footer.tsx        # Footer with navigation and privacy link
│   ├── WhatsAppButton.tsx # Floating WhatsApp chat button
│   ├── VoltCareLogo.tsx  # Reusable text-based logo component
│   └── ui/              # shadcn/ui component library
├── pages/
│   ├── Index.tsx         # Main landing page (all sections)
│   ├── PrivacyPolicy.tsx # Privacy policy page
│   └── NotFound.tsx      # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css            # Global styles, design tokens, animations
```

## 🔗 How to Link Your Google Form

1. Go to [Google Forms](https://forms.google.com) and create your inquiry form
2. Click **Send** → Click the **link icon** (🔗) → Copy the URL
3. Open `src/components/ContactSection.tsx`
4. Replace the `googleFormUrl` variable with your form link
5. For the embedded form: Click **Send** → Click the **embed icon** (`<>`) → Copy the iframe URL
6. Replace `YOUR_FORM_ID` in the iframe `src` attribute with your actual form ID

```
Embed URL format:
https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Floating WhatsApp button (9970174508)
- ✅ Click-to-call button (auto-dials 9970174508)
- ✅ Google Form integration for inquiries
- ✅ SEO optimized with JSON-LD structured data
- ✅ Google Maps link integration
- ✅ Platform links (LinkedIn, IndiaMART, Sulekha, OLX, JustDial, UrbanClap)
- ✅ Privacy Policy page
- ✅ Auto-sliding hero with Ken Burns effect
- ✅ Trusted brand partners section
- ✅ Founder information and company history
- ✅ Fast loading with lazy-loaded assets

## 📞 Contact

- **Founder:** Tejesh Mulchand Bhagat
- **Phone:** +91 84597 18594 / +91 99701 74508
- **WhatsApp:** +91 99701 74508
- **Email:** info@voltcaresolutions.com
- **Areas:** Gondia & Nagpur, Maharashtra

## 📄 License

© 2024–2026 VOLTCARE Electrical Solutions. All rights reserved.
