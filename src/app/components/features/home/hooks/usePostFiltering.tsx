import { useState, useEffect } from 'react';
import { Post } from '@/app/application/core/models/post';
import { SerializedPostTagMap } from '@/app/utils/post-utils';

export function usePostFiltering(posts: Post[], tagMap: SerializedPostTagMap) {
    const [selectedTag, setSelectedTag] = useState<string[] | null>(null);
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(function useSelectedTags() {
        if (selectedTag && selectedTag.length > 0) {
            const matchingPostIds = new Set(tagMap[selectedTag[0]]);

            for (let i = 1; i < selectedTag.length; i++) {
                const tagPostIds = new Set(tagMap[selectedTag[i]]);
                for (const postId of matchingPostIds) {
                    if (!tagPostIds.has(postId)) {
                        matchingPostIds.delete(postId);
                    }
                }
            }

            const filtered = posts.filter((post) =>
                matchingPostIds.has(post.id.toString())
            );

            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(posts);
        }
    }, [selectedTag, posts, tagMap]);

    const handleTagClick = (tag: string) => {
        setSelectedTag((prevSelectedTag) => {
            if (prevSelectedTag === null) {
                return [tag];
            }
            if (prevSelectedTag.includes(tag)) {
                return prevSelectedTag;
            }
            return [...prevSelectedTag, tag];
        });
    };

    const removeTag = (tagToRemove: string) => {
        setSelectedTag((prevSelectedTag) => {
            if (!prevSelectedTag) return null;
            const newTags = prevSelectedTag.filter(
                (tag) => tag !== tagToRemove
            );
            return newTags.length > 0 ? newTags : null;
        });
    };

    const clearTags = () => setSelectedTag(null);

    return {
        selectedTag,
        filteredPosts,
        handleTagClick,
        removeTag,
        clearTags,
    };
}