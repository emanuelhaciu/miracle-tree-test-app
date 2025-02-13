import { Post } from "@/app/application/core/models/post";
import { usePostAndUser } from "./usePostAndUser";
import PostDetails from "@/app/components/shared/post-details";

export default function PostAndUserDetails({ post }: { post: Post }) {
    const { user, isLoading, error } = usePostAndUser(post);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (!post || !user) {
      return <div>Post or user not found</div>;
    }
  
    return (
      <PostDetails post={post} user={user} />
    );
  }