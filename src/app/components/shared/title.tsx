import React from 'react';

interface TitleProps {
    title: string;
    className?: string;
}

export const Title = React.memo(function Title({
    title,
    className,
}: TitleProps) {
    return <h2 className={className}>{title}</h2>;
});