import React from 'react';
import { Body } from '../body';

interface PostBodyProps {
  body: string;
  className?: string;
}

export const PostBody = React.memo(function PostBody({
  body,
  className,
}: PostBodyProps) {

  return (
    <div className={className}>
      <Body body={body} />
    </div>
  );
});