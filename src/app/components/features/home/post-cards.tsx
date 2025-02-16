import { Post } from '@/app/application/core/models/post';
import { SerializedPostTagMap, truncateBody } from '@/app/utils/post-utils';
import { usePostFiltering } from './hooks/usePostFiltering';
import PostCard from '@/app/components/shared/post/card';
import { useMemo } from 'react';

interface Props {
    posts: Post[];
    tagMap: SerializedPostTagMap;
}

export default function PostCards({ posts, tagMap }: Props) {
    const { selectedTag, filteredPosts, handleTagClick, removeTag, clearTags } =
        usePostFiltering(posts, tagMap);

    const memoizedFilteredPosts = useMemo(
        () =>
            filteredPosts.map((post: Post) => ({
                ...post,
                body: truncateBody(post.body),
            })),
        [filteredPosts]
    );

    return (
        <div className="space-y-6">
            {selectedTag && (
                <div className="flex items-center gap-2 flex-wrap">
                    <span>Filtered by:</span>
                    <div className="flex flex-wrap gap-2">
                        {selectedTag.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => removeTag(tag)}
                                className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700"
                            >
                                <span className="font-bold">{tag}</span>
                                <span className="font-bold">×</span>
                            </button>
                        ))}
                        <button
                            onClick={clearTags}
                            className="px-3 py-1 text-sm bg-gray-600 text-white rounded-full hover:bg-gray-700"
                        >
                            Clear all
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
                {memoizedFilteredPosts.map((post: Post) => (
                    <PostCard
                        key={post.id}
                        aria-labelledby={`post-${post.id}`}
                        post={post}
                        onTagClick={handleTagClick}
                    />
                ))}
            </div>
        </div>
    );
}
