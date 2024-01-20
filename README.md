## TO-DO List
Add Husky and pre-commit rules
Finish shuffle
Maybe start adding facet data to videos???

## General Architecture

This archive site is a combination of NextJS SSR (static build), Vercel (Frontend cloud), and Cloudflare (R2 bucket for assets, other CF perks.)

Vercel and CF are both on hobby/free tier plans. I pay usage billing on the R2 bucket and will always be looking for ways to keep that cost down.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
