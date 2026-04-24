# Somos Los Pichy Boys — Website Concept

A modern, high-energy website concept created for **Los Pichy Boys**, designed to bring their shows, podcast content, sponsors, cast, community, and digital universe into one centralized online experience.

> This project is a front-end website concept/deploy created as a presentation-ready proposal for the Los Pichy Boys brand.

![Main shot of the Website](/images/shot-1.png "Main shot of the Website")

---

## Live Preview

**Demo:** [https://somos-los-pichy-boys.netlify.app/](https://somos-los-pichy-boys.netlify.app/)

---

## Project Overview

The goal of this project is to create a premium digital home for Los Pichy Boys where fans can quickly discover upcoming shows, featured podcast episodes, special guests, sponsors, community updates, and brand-related content.

The website is built with a bold visual direction inspired by entertainment, comedy, nightlife, podcast culture, and Cuban-American humor. It uses strong imagery, glowing panels, animated sections, responsive layouts, and a dark cinematic design language.

![Main shot of the Website](/images/shot-2.png "Main shot of the Website")

---

## Main Features

- Fully responsive landing page design
- Modern hero section with layered background visuals
- Upcoming shows section
- Character/cast selector section
- Special guests section
- Podcast and episode highlights
- Sponsors section with clickable sponsor cards
- Community/newsletter form prepared for Netlify Forms
- Footer with brand links and contact structure
- Smooth scrolling and animated visual effects
- Mobile-first improvements for key sections
- SEO-friendly Astro structure
- Clean component-based architecture

![Main shot of the Website](/images/shot-4.png "Main shot of the Website")

---

## Tech Stack

This project was built using:

- **Astro** — Static site framework
- **React** — Interactive UI components
- **TypeScript** — Typed component logic
- **Tailwind CSS** — Utility-first styling
- **Netlify** — Deployment and form handling
- **HTML / CSS / JavaScript** — Core web technologies

---

## Folder Structure

```bash
.
├── public/
│   └── images/
│       ├── branding/
│       ├── cast/
│       ├── guests/
│       ├── hero/
│       ├── shows/
│       └── sponsors/
│
├── src/
│   ├── components/
│   │   ├── icons/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── tailwind.config.js
└── README.md
```

---

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Navigate into the project folder

```bash
cd your-repository-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The project should now be running at:

```bash
http://localhost:4321
```

---

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Builds the project for production.

```bash
npm run preview
```

Previews the production build locally.

---

## Netlify Forms Integration

The community form is prepared to work with **Netlify Forms**.

A typical Netlify-ready form structure looks like this:

```html
<form name="community" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="community" />
  <input type="text" name="name" placeholder="Tu nombre" required />
  <input type="email" name="email" placeholder="Tu email" required />
  <button type="submit">Unirme</button>
</form>
```

After deploying to Netlify, submissions can be viewed directly from the Netlify dashboard.

---

## Design Direction

The website uses a dark, energetic, entertainment-driven style with:

- Neon cyan and magenta accents
- Glowing card panels
- Large expressive typography
- Floating visual elements
- Cinematic background overlays
- Responsive image compositions
- Strong contrast for readability
- Mobile-first adjustments for better user experience

![Main shot of the Website](/images/shot-5.png "Main shot of the Website")

The goal is to make the website feel like an extension of the Los Pichy Boys brand: fun, loud, polished, Cuban, energetic, and instantly recognizable.

---

## Main Sections

### Hero

A cinematic introduction to the brand with strong visuals, main call-to-action buttons, and a bold headline.

### Shows

Displays upcoming shows with event image, city, date, venue, status, and ticket links.

### Cast / Characters

Interactive section where users can select cast members and view their role, bio, stats, moments, and highlighted clips.

### Special Guests

A lightweight section for featured guests, including name, role, image, and Instagram link.

### Episodes / Podcast

A section designed to highlight recent podcast episodes or clips. It can later be connected to the YouTube Data API for dynamic uploads.

### Sponsors

Clickable sponsor cards with logo/image, short description, and external website links.

### Community

Newsletter/community capture section prepared for Netlify Forms.

### Footer

Brand closing section with useful navigation links, social links, logo placement, and contact information.

![Main shot of the Website](/images/shot-6.png "Main shot of the Website")

---

## Future Improvements

Potential next steps for this project include:

- Connect the podcast section to the YouTube Data API v3
- Add dynamic show/event management
- Add CMS support for episodes, sponsors, guests, and events
- Add a dedicated merch section
- Add analytics tracking
- Add Open Graph preview images for social sharing
- Add a blog/news section
- Add full SEO schema markup
- Add multi-language support if needed

---

## Deployment

This project is deployed with **Netlify**.

To deploy your own version:

1. Push the project to GitHub.
2. Connect the repository to Netlify.
3. Set the build command:

```bash
npm run build
```

4. Set the publish directory:

```bash
dist
```

5. Deploy the site.

---

## Disclaimer

This website is an independent concept/proposal created for presentation purposes. All brand names, images, logos, personalities, and references related to Los Pichy Boys belong to their respective owners.

---

## Author

Designed and developed by **Michel Garcia Ribalta**.

- GitHub: [MyNameIsJeff-305](https://github.com/MyNameIsJeff-305)
- LinkedIn: [Michel Garcia Ribalta](https://www.linkedin.com/in/mm4ever/)

---

## License

This project is currently intended for private presentation and proposal purposes. A public license can be added if the repository becomes open source.

