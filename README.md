# Scroll Expansion Motion Site

This workspace now uses the expected shadcn-style structure:

- Components: `components/ui`
- Styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- shadcn config: `components.json`

The `components/ui` path matters because shadcn aliases `ui` to `@/components/ui`; keeping generated and copied UI primitives there makes imports predictable across the app.

## Setup

Install dependencies:

```bash
npm install
```

Run the site:

```bash
npm run dev
```

If starting from an empty folder again, the equivalent shadcn setup path is:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir false --import-alias "@/*"
npx shadcn@latest init
npm install framer-motion lucide-react
```

## Files

- `components/ui/scroll-expansion-hero.tsx`: requested expanding media component
- `components/ui/scroll-expansion-demo.tsx`: demo variants and stock image/video data
- `app/scroll-expansion-demo/page.tsx`: standalone route for the copied component demo
- `app/page.tsx`: renders the demo as the first screen

Kling/fal generation was not called because `FAL_KEY` is not set. Add it before using the Kling image-to-video workflow:

```bash
$env:FAL_KEY="fal-..."
```
