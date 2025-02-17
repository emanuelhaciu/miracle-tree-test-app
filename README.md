This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Installation and setup instructions

1. Clone the repository
2. Create .env file in the root directory and add the following variables:
   - `NEXT_PUBLIC_THIRD_PARTY_API_URL`
3. Run `npm install` to install the dependencies
4. Run `npm run dev` to start the development server

## Approach and advanced feature implemented

### Advanced Features

1. **Hybrid Static Generation with ISR:** 
   - Pre-render first 10 posts at build time using `getStaticPaths` with `paths: generatedPosts.slice(0, 10)`
   - Implement Incremental Static Regeneration (ISR) with `fallback: 'blocking'` for remaining posts
   - Auto-revalidate pages every hour (`revalidate: 3600`) for fresh content
   - User data is fetched at build time via `getPostsAction` (parallel user/post API calls) eliminating client-side fetching

2. **Optimized Data Fetching:**
   - User data is collocated with posts during build (`getPostsAction` maps users to posts)
   - Removed client-side user fetching hooks (`usePostAndUser`) reducing client-side JavaScript

3. **Type-Safe API Layer:**
   - Strong typing throughout the data fetching layer (axios instance with TypeScript generics)
   - Automatic retry logic (3 attempts) for failed API requests

4. **Performance Optimization:**
   - Dynamic route segments (`/post/[id]`) only generate when accessed
   - Smart caching strategy through `revalidate` maintains freshness while reducing build times

5.  **Tag-Based Filtering:** The implementation of a custom tagging system, including hashtag generation and filtering, provides a user-friendly way to explore content. A dictionary (hash map) is created at build time (`createPostTagMap` and `serializeTagMap` functions) to store post IDs associated with each tag. This allows for O(1) lookup complexity when filtering posts by tag, ensuring efficient filtering even with a large number of posts and tags. The use of a `Set` internally within the `createPostTagMap` function, before serialization, ensures uniqueness of post IDs for each tag. The `usePostFiltering` hook then leverages this pre-built dictionary for filtering.

6.  **Custom Hooks:** The use of custom hooks (`usePostFiltering`, `usePostAndUser`) encapsulates specific logic, promoting code reusability and maintainability.

7.  **Component Reusability:** The project extensively uses reusable components (e.g., `Wrapper`, `Title`, `Body`, `PostCard`, etc.), making the codebase more organized and easier to maintain.

8.  **Type Safety:** The entire project is written in TypeScript, providing strong typing and reducing the likelihood of runtime errors.

9.  **Responsive Design:** The application uses Tailwind CSS, making it responsive across various screen sizes.

10.  **Error Handling:** The API service includes error handling for failed requests.