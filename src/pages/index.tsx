import Wrapper from '@/app/components/layout/wrapper';
import { getPostsAction } from '@/app/actions/post-actions';
import { Post } from '@/app/application/core/models/post';
import { GetStaticProps, InferGetStaticPropsType } from 'next/dist/types';
import PostCards from '@/app/components/routes/home/post-cards';

export const getStaticProps = (async () => {
  const posts = await getPostsAction();
  return { props: { posts } };
}) satisfies GetStaticProps<{ posts: Post[] }>;

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="mx-auto space-y-10">
      <Wrapper>
        <PostCards posts={posts} />
      </Wrapper>
    </main>
  );
}
