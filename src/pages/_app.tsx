import { Layout } from '@/app/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Miracle Tree Blog</title>
                <meta
                    name="description"
                    content="A modern blog built with Next.js"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
