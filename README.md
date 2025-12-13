# Agentforce Vibes

A clean, professional blog theme for Astro inspired by the Salesforce blog design. Features dark mode, search functionality, social sharing, and a responsive layout.

## Features

- 🎨 **Salesforce-inspired design** — Clean, professional aesthetic with the signature blue color scheme
- 🌙 **Dark mode** — Toggle between light and dark themes
- 🔍 **Search** — Client-side search with keyboard shortcuts (⌘/Ctrl + K)
- 📱 **Responsive** — Looks great on desktop, tablet, and mobile
- 📤 **Social sharing** — Share posts to Twitter, LinkedIn, Facebook, or copy the link
- ⚡ **Fast** — Static site generation with Astro
- 📝 **Markdown-based** — Write posts in Markdown or MDX

## Project Structure

```
agentforce-vibes/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FeaturedPost.astro
│   │   ├── PostCard.astro
│   │   ├── FormattedDate.astro
│   │   ├── SearchOverlay.astro
│   │   └── SocialShare.astro
│   ├── content/
│   │   └── blog/          # Your blog posts (Markdown/MDX)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── about.astro    # About page
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       └── global.css     # All styles
├── public/                # Static assets
├── astro.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or copy this theme to your project directory

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:4321 in your browser

### Configuration

Update `astro.config.mjs` with your site URL and base path:

```javascript
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/your-repo-name',
  integrations: [mdx(), sitemap()],
});
```

## Writing Blog Posts

Create new posts in `src/content/blog/` as Markdown files:

```markdown
---
title: 'Your Post Title'
description: 'A brief description for SEO and previews'
pubDate: 'Dec 13 2025'
heroImage: '/agentforce-vibes/your-image.jpg'
---

Your content here...
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | The post title |
| `description` | No | Brief description for SEO and post cards |
| `pubDate` | Yes | Publication date |
| `updatedDate` | No | Last updated date |
| `heroImage` | No | Path to hero image |

## Customization

### Colors

Edit the CSS custom properties in `src/styles/global.css`:

```css
:root {
  --color-primary: #0176d3;
  --color-primary-dark: #014486;
  --color-primary-light: #1b96ff;
  --color-accent: #00a1e0;
  /* ... */
}
```

### Site Title & Description

Update the hero section in `src/pages/index.astro`:

```astro
<Hero 
  title="Your Blog Name" 
  description="Your blog description..."
/>
```

### About Page

Edit `src/pages/about.astro` with your own content.

## Deployment

### GitHub Pages

1. Update `astro.config.mjs` with your GitHub Pages URL
2. Push to GitHub
3. Enable GitHub Pages in repository settings (Settings → Pages → Source: GitHub Actions)
4. The included workflow will automatically build and deploy on push to `main`

### Other Platforms

Build the static site:

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static hosting service.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |

## License

MIT
