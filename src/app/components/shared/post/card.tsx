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
            className={`flex flex-col gap-6 min-h-[400px] p-6 rounded-xl shadow-lg border border-border/5 w-full`}
        >
            <div className="min-h-[50px] xs:min-h-[100px] md:min-h-[100px] lg:min-h-[100px] xl:min-h-[100px] 2xl:min-h-[125px]">
                <PostTitle
                    title={post.title}
                    postId={post.id}
                    className="font-semibold line-clamp-3 text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl w-full whitespace-normal first-letter:uppercase text-titleColor"
                />
            </div>
            <div className="flex flex-col">
                <div className="min-h-[80px] xs:min-h-[100px] md:min-h-[100px] lg:min-h-[100px] xl:min-h-[100px] 2xl:min-h-[150px] flex-grow">
                    <PostBody
                        body={post.body}
                        className="text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex-grow first-letter:uppercase"
                    />
                </div>
                {isReadMore && <PostReadMore postId={post.id} />}
        </div>
            <div className="flex flex-col">
                <PostTags
                    tags={post.tags}
                    onTagClick={onTagClick}
                    containerClassName="flex flex-wrap gap-2"
                    tagClassName="
                    flex items-center gap-2 py-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-blue-600 
                    text-white rounded-full hover:bg-blue-700 text-mainColor flex-grow"
                />
            </div>
        </div>
    );
});
