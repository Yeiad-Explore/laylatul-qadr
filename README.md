# العشر الأواخر — The Last 10 Nights of Ramadan

A modern full-stack website for the Last 10 Nights of Ramadan (Laylat ul-Qadr) guide. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (serverless)
- **Data**: Typed content layer with API endpoints for all sections

## Features

- Responsive, elegant design with Arabic typography (Amiri, Cormorant Garamond, Cinzel)
- Night-by-night roadmap (21–30) with Laylat ul-Qadr candidates
- Hadiths, duas, history timeline, signs of the night, and worship (Ibadah) guide
- API endpoints for content: `/api/content`, `/api/nights`, `/api/hadiths`, `/api/duas`
- Bookmarks API for saving favorite items (future enhancement)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/content` | GET | Full content (all sections) |
| `/api/nights` | GET | Night-by-night roadmap |
| `/api/hadiths` | GET | Prophetic traditions |
| `/api/duas` | GET | Sacred supplications |
| `/api/bookmarks` | GET/POST/DELETE | User bookmarks (session-based) |

## Project Structure

```
src/
├── app/           # Next.js App Router
│   ├── api/       # API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/    # React components
├── data/          # Content & types
└── hooks/         # Custom hooks (e.g. scroll reveal)
```

## Build

```bash
npm run build
npm start
```
