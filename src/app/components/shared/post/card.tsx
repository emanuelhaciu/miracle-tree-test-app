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
            className={`flex flex-col h-full gap-6 p-6 rounded-xl shadow-lg border border-border/5 w-full`}
        >
            <div className="min-h-10 md:min-h-24 lg:min-h-20 xl:min-h-24 2xl:min-h-28">
                <PostTitle
                    title={post.title}
                    postId={post.id}
                    className="font-semibold line-clamp-3 text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl w-full whitespace-normal first-letter:uppercase text-titleColor"
                />
            </div>
            <div className="flex flex-col flex-grow">
                <PostBody
                    body={post.body}
                    className="text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl first-letter:uppercase text-bodyColor"
                />
            {isReadMore && <PostReadMore className='text-linkColor hover:text-mainColor font-medium transition-colors 2xl:text-2xl' postId={post.id} />}

            </div>

            <div className="flex flex-col">
                <PostTags
                    tags={post.tags}
                    onTagClick={onTagClick}
                    containerClassName="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2"
                    tagClassName="
                    flex items-center gap-2 py-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl bg-blue-600 
                    text-white rounded-full hover:bg-blue-700 text-mainColor"
                />
            </div>
        </div>
    );
});
