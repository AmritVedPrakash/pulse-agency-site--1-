# Frame Theory Socials – Social Media Agency Website

React + Vite + Tailwind + Framer Motion + Lucide + React Router.

## Run
```
npm install
cp .env.example .env   # then fill in values
npm run dev            # http://localhost:5173
npm run build          # production build in dist/
```

## Folder structure
```
src/
  pages/        Thin pages: only list sections in order (Home, AboutUs, Pricing, ContactUs)
  components/
    common/     Button, SmartImg, ScrollReveal, Counter, PageHero, CtaBlock, Testimonials...
    layout/     Navbar, Footer
    home/       Hero, Marquee, Services, Portfolio, Results, Process
    about/      Story, MissionVision, Values, Team, Approach
    pricing/    PricingCards, Included, Comparison, Faq, PricingCard, FaqItem
    contact/    ContactForm, ContactInfo, NextSteps
  layouts/      MainLayout (navbar, footer, page transitions)
  data/         All editable text: site, services, pricing, about, contact, testimonials
  hooks/        useSEO
```
To reorder, add or remove a section, edit the page file in `src/pages/`.

## Edit content
- `src/data/site.js` – name, email, WhatsApp, social links, Unsplash photo IDs
- `src/data/pricing.js` – plans, comparison table, FAQs (example pricing only)
- `src/data/services.js` – services, portfolio, process, brand names, stats
- `src/data/about.js` – About page story, mission, values, approach
- `src/data/contact.js` – Contact page steps and FAQs
- `src/data/testimonials.js` – testimonials and team (samples)

## Before publishing
- Replace demo stats, sample testimonials, placeholder brand names and team profiles with real, verified data.
- Set `VITE_FORM_ENDPOINT` (Formspree / Web3Forms / your own backend). Without it the form shows an error, never a fake success. Keep private keys on a server.
- Pricing buttons link to `/contact?plan=Growth` etc., which prefills the plan.
- For hosting on Netlify/Vercel, add an SPA rewrite so all routes serve `index.html`.
