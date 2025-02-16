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
   - `NEXT_PUBLIC_THIRD_PARTY_URL`
3. Run `npm install` to install the dependencies
4. Run `npm run dev` to start the development server

## Approach and advanced feature implemented

### Advanced Features

1.  **Static Site Generation (SSG):** The application utilizes Next.js's SSG capabilities (`getStaticProps` and `getStaticPaths`) to pre-render pages at build time. This significantly improves performance and SEO.

2.  **Tag-Based Filtering:** The implementation of a custom tagging system, including hashtag generation and filtering, provides a user-friendly way to explore content. A dictionary (hash map) is created at build time (`createPostTagMap` and `serializeTagMap` functions) to store post IDs associated with each tag. This allows for O(1) lookup complexity when filtering posts by tag, ensuring efficient filtering even with a large number of posts and tags. The use of a `Set` internally within the `createPostTagMap` function, before serialization, ensures uniqueness of post IDs for each tag. The `usePostFiltering` hook then leverages this pre-built dictionary for filtering.

3.  **Custom Hooks:** The use of custom hooks (`usePostFiltering`, `usePostAndUser`) encapsulates specific logic, promoting code reusability and maintainability.

4.  **Component Reusability:** The project extensively uses reusable components (e.g., `Wrapper`, `Title`, `Body`, `PostCard`, etc.), making the codebase more organized and easier to maintain.

5.  **Type Safety:** The entire project is written in TypeScript, providing strong typing and reducing the likelihood of runtime errors.

6.  **Responsive Design:** The application uses Tailwind CSS, making it responsive across various screen sizes.

7.  **Error Handling:** The API service includes error handling for failed requests.