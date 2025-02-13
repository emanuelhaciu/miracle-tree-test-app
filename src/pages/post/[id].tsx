import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { getPostsAction } from '@/app/actions/post-actions';

import { Post } from '@/app/application/core/models/post';
import Wrapper from '@/app/components/layout/wrapper';
import PostAndUserDetails from '@/app/components/routes/post/[id]/post-user-details';

interface PostPageProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = (async () => {
  const posts: Post[] = await getPostsAction();
  
  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const posts: Post[] = await getPostsAction();
  const post = posts.find((p: Post) => p.id.toString() === params?.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="mx-auto p-6">
        <Wrapper>
            <PostAndUserDetails post={post} />
        </Wrapper>
    </main>
);
}