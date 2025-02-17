import { Post } from '@/app/application/core/models/post';
import PostCard from '@/app/components/shared/post/card';
import UserDetails from '@/app/components/features/post/[id]/user-details';
export default function PostAndUserDetails({ post }: { post: Post }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="inline gap-4 border border-border/5 rounded-lg p-4 space-y-4">
                {post.user && <UserDetails user={post.user} />}
            </div>
            <div className="flex w-full">
                <PostCard post={post} isReadMore={false} />
            </div>
        </div>
    );
}
    