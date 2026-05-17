# Sharmi Aari Designer — Website Delivery

A premium dark-themed single-page marketing site built with React, Vite and Tailwind CSS for "Sharmi Aari Designer" — a boutique studio for Aari embroidery, bridal blouse crafting, tailoring and boutique styling training.

---

## Project Summary
- Purpose: Marketing and lead-generation site for classes, bridal services and boutique training.
- Single-page focused UX with in-page anchors and sections: Hero, About, Courses, Services, Gallery, Testimonials, Contact (form + details + map).
- Mobile-first responsive design with premium dark/gold theme.
- Contact form uses Web3Forms for backend-less submission.

---

## Tech Stack
- React 18
- Vite (dev + build)
- Tailwind CSS
- Framer Motion (animations)
- React Router (routing)
- React Icons

---

## What I delivered
- Responsive single-page site with SEO metadata and JSON-LD LocalBusiness schema.
- Contact form wired for Web3Forms using `VITE_WEB3FORMS_ACCESS_KEY` from environment.
- Horizontal mobile showcase for boutique highlights and desktop grid fallback.
- Mobile "See more" toggle in Services to progressively reveal items.
- Footer with contact details, quick links and social links.
- `public/robots.txt`, `public/sitemap.xml`, and `public/site.webmanifest` added.
- Production build verified (`npm run build`).

---

## Setup (Developer)
1. Install dependencies

```bash
npm install
```

2. Create a `.env` file in the project root and add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

3. Run development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview production build locally

```bash
npm run preview
```

---

## Files & Structure (key files)
- `index.html` — Base HTML, SEO meta tags, Open Graph, Twitter cards and JSON-LD.
- `src/App.jsx` — Router and layout wrapper.
- `src/pages/Home.jsx` — Main single-page sections and contact anchor.
- `src/components/ContactForm.jsx` — Web3Forms integration and client-side validation.
- `src/components/Services.jsx` — Services grid + mobile "See more" behavior.
- `src/components/Footer.jsx` — Responsive footer with exact delivery text.
- `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest` — SEO and PWA support.

---

## SEO & Performance Notes
- Meta tags, canonical and JSON-LD included in `index.html`.
- `sitemap.xml` exists in `public/` and `robots.txt` points to it.
- For ranking improvements: content quality, backlinks, and page speed are required beyond metadata. Consider image optimization and adding structured blog/content pages over time.

---

## Deployment Recommendations
- Host on a static host (Netlify, Vercel, Cloudflare Pages, S3+CloudFront).
- Ensure the domain `https://sharmiaari.com` (or client domain) is configured and `sitemap.xml` is submitted to Google Search Console.
- Add HTTPS redirects and gzip/Brotli compression.

Example `Netlify` deploy steps:
1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variable `VITE_WEB3FORMS_ACCESS_KEY` in site settings

---

## Handoff Instructions for Client
Provide the client with:
- The project folder (source files)
- The `.env` instructions (add `VITE_WEB3FORMS_ACCESS_KEY`)
- Access to hosting console (Netlify/Vercel) to set environment variables
- Basic maintenance notes: update images in `assets/`, update contact details in `src/pages/Home.jsx` and rebuild.

---

## Short code snippets (for reference)

Contact form submission (Web3Forms) — located in `src/components/ContactForm.jsx`:

```js
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
const payload = new FormData()
payload.append('access_key', accessKey)
Object.entries(form).forEach(([k,v]) => payload.append(k, v))
await fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload })
```

Mobile-friendly boutique highlight row (see `src/pages/Home.jsx`):

```jsx
<div className="overflow-x-auto lg:overflow-hidden hide-scrollbar snap-x snap-mandatory">
  <div className="flex flex-nowrap gap-5 min-w-max lg:grid lg:grid-cols-4 lg:min-w-0">
    {highlights.map(h => (
      <button className="snap-start min-w-[280px] sm:min-w-[320px] glass p-6 rounded-3xl">...</button>
    ))}
  </div>
</div>
```

Services mobile reveal (see `src/components/Services.jsx`):

```jsx
const [showAll, setShowAll] = useState(false)
const visibleItems = showAll ? items : items.slice(0,5)
// button toggles showAll
```

---

## Next steps I can take (optional)
- Run Lighthouse and fix top performance/accessibility issues.
- Add srcset and responsive image optimization for the gallery.
- Create a one-page PDF handover document for the client.

---

If you’d like, I can also generate a compact PDF handover file and attach it here, or commit the final project to a Git repository and prepare deploy settings for Netlify/Vercel.
