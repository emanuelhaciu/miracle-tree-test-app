import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from 'next';

import { Post } from '@/app/application/core/models/post';
import Wrapper from '@/app/components/layout/wrapper';
import PostAndUserDetails from '@/app/components/features/post/[id]/post-user-details';
import { useRouter } from 'next/router';
import { getPostsAction, getPostsAndUsersAction } from '@/app/actions/post.actions';

interface PostPageProps {
    post: Post;
}

export const getStaticPaths = (async () => {
    const posts = await getPostsAction();
    const PRE_RENDER_COUNT = 10;

    return {
        paths: posts.slice(0, PRE_RENDER_COUNT).map((post: Post) => ({
            params: { id: post.id.toString() },
        })),
        fallback: 'blocking',
    };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
    if (!context.params?.id) {
        return { notFound: true };
    }

    const posts = await getPostsAndUsersAction();
    
    const postId = context.params?.id;
    const targetId = Number(postId);
    const post = posts.find((p: Post) => p.id === targetId);

    if (!post) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: { post },
        revalidate: 3600,
    };
}) satisfies GetStaticProps<PostPageProps>;

export default function PostPage({
    post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <main className="mx-auto p-6">
            <Wrapper>
                <PostAndUserDetails post={post} />
            </Wrapper>
        </main>
    );
}
