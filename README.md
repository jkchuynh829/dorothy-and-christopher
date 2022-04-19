This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Local Dev

To develop locally with a local Supabase instance, follow [Supabase Local Development](https://supabase.com/docs/guides/local-development).
Inside, there are instructions to:
 - Download the Supabase Client CLI.
 - After downloading the CLI, there are instructions on how to use the CLI to login with your Supabase credentials via `supabase login`.
 - There's a step to initialize a `supabase` folder within the project, but pulling this repo down should already include one, so you can skip that step.
 - Afterward, you'll be able to spin up Docker containers to run local Supabase services with `supabase start`.
 - An output of credentials will show after the command is finished running.
 - Two of these, `API URL` and `anon key`, can be used for your local `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, respectively.
 - A value for `Studio URL` will also show where you'll be able to access a local version of Supabase's studio, where you can use the GUI to make db changes and SQL queries.
 - There are also instructions on how to synchronize remote database changes with local database changes via migrations.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
