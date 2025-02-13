import { Post } from '@/app/application/core/models/post';
import Link from 'next/link';
import React from 'react';

export default React.memo(function PostCard({ post }: { post: Post }) {
    return (
        <div
            key={post.id}
            className="flex flex-col min-h-[320px] p-6 rounded-xl shadow-lg border border-border/5 items-stretch"
        >
            <div className="flex-1">
                <h2 className="font-semibold mb-4 line-clamp-3 text-2xl 2xl:text-4xl">
                    <Link href={`/post/${post.id}`}>{post.title}</Link>
                </h2>
            </div>

            <div className="flex-1">
                <p className="line-clamp-3 mb-4 2xl:text-2xl">{post.body}</p>
            </div>

            <div className="inline-flex">
                <Link
                    href={`/post/${post.id}`}
                    className="text-primary hover:text-mainColor font-medium transition-colors 2xl:text-2xl"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
});
