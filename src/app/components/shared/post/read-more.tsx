import Link from 'next/link';
import React from 'react';

interface PostReadMoreProps {
  postId: number;
  className?: string;
}

export const PostReadMore = React.memo(function PostReadMore({
  postId,
  className = 'text-primary hover:text-mainColor font-medium transition-colors 2xl:text-2xl',
}: PostReadMoreProps) {
  return (
      <Link href={`/post/${postId}`} className={className}>
        Read More
      </Link>
  );
});