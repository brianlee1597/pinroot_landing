# PinRoot Landing

Static-first landing page for PinRoot, built with Next.js, Vercel, and Tailwind CSS.

## Stack

- Next.js App Router
- Static export via `output: "export"` for precomputed HTML
- Tailwind CSS v4 through `@tailwindcss/postcss`
- TypeScript

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

The static design library lives at `http://localhost:3000/styleguide`.

## Production Build

```bash
pnpm build
```

The static export is emitted to `out/`.
