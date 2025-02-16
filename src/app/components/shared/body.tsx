import React from 'react';

interface BodyProps {
  body: string;
  className?: string;
}

export const Body = React.memo(function Body({
  body,
  className,
}: BodyProps) {

  return (
      <p className={className}>{body}</p>
  );
});