import { Post } from '@/app/application/core/models/post';
import React from 'react';
import { PostTags } from './tags';
import { PostReadMore } from './read-more';
import { PostBody } from './body';
import { PostTitle } from './title';

interface PostCardProps {
    post: Post;
    onTagClick?: (tag: string) => void;
    isReadMore?: boolean;
}

export default React.memo(function PostCard({
    post,
    onTagClick,
    isReadMore = true,
}: PostCardProps) {
    return (
        <div
            key={post.id}
            className={`flex flex-col gap-6 p-6 rounded-xl shadow-lg border border-border/5 w-full`}
        >
            <div className="min-h-[12vh] sm:min-h-[12vh] md:min-h-[12vh] lg:min-h-[12vh] xl:min-h-[10vh] 2xl:min-h-[8vh]">
                <PostTitle
                    title={post.title}
                    postId={post.id}
                    className="font-semibold line-clamp-3 text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl w-full whitespace-normal first-letter:uppercase text-titleColor"
                />
            </div>
            <div className="flex flex-col">
                <div className="pb-4">
                    <PostBody
                        body={post.body}
                        className="text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl first-letter:uppercase"
                    />
                </div>

                {isReadMore && <PostReadMore postId={post.id} />}
            </div>
            <div className="flex flex-col">
                <PostTags
                    tags={post.tags}
                    onTagClick={onTagClick}
                    containerClassName="flex flex-wrap gap-2 justify-between"
                    tagClassName="
                    flex items-center gap-2 py-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-blue-600 
                    text-white rounded-full hover:bg-blue-700 text-mainColor"
                />
            </div>
        </div>
    );
});
