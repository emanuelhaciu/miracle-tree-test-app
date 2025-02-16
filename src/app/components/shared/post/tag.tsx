import React from 'react';

interface TagProps {
    tag: string;
    onClick?: (tag: string) => void;
}

export const Tag = ({ tag, onClick }: TagProps) => {
    return (
        <button type="button" onClick={() => onClick?.(tag)}>{tag}</button>
    )
}