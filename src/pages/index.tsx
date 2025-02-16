import Wrapper from '@/app/components/layout/wrapper';
import { getPostsAction } from '@/app/actions/post.actions';
import { Post } from '@/app/application/core/models/post';
import { GetStaticProps, InferGetStaticPropsType } from 'next/dist/types';
import PostCards from '@/app/components/features/home/post-cards';
import {
    createPostTagMap,
    serializeTagMap,
    SerializedPostTagMap,
} from '@/app/utils/post-utils';

export const getStaticProps = (async () => {
    const posts = await getPostsAction();
    const tagMap = createPostTagMap(posts);
    const serializedTagMap = serializeTagMap(tagMap);

    return {
        props: {
            posts,
            tagMap: serializedTagMap,
        },
    };
}) satisfies GetStaticProps<{
    posts: Post[];
    tagMap: SerializedPostTagMap;
}>;

export default function Home({
    posts,
    tagMap,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <main className="mx-auto space-y-10">
            <Wrapper>
                <PostCards posts={posts} tagMap={tagMap} />
            </Wrapper>
        </main>
    );
}
