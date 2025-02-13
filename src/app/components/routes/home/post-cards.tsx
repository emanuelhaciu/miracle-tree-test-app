import { Post } from '@/app/application/core/models/post';
import PostCard from '@/app/components/shared/post-card';

interface Props {
    posts: Post[];
  }
  
  export default function PostCards({ posts }: Props) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }