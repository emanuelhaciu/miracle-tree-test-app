import Link from 'next/link';
import React from 'react';

interface PostReadMoreProps {
  postId: number;
  className?: string;
}

export const PostReadMore = React.memo(function PostReadMore({
  postId,
  className
}: PostReadMoreProps) {
  return (
      <Link href={`/post/${postId}`}>
        <p className={className}>Read More</p>
      </Link>
  );
});