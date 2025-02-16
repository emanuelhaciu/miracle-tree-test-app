import React from 'react';
import { Tag } from './tag';

interface PostTagsProps {
    tags: string[];
    onTagClick?: (tag: string) => void;
    containerClassName?: string;
    tagClassName?: string;
}

const tagSets = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'CSS',
    'HTML',
    'Next.js',
    'GraphQL',
    'MongoDB',
    'Redux',
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'CSS',
    'HTML',
    'Next.js',
    'GraphQL',
    'MongoDB',
    'Redux',
];

export const PostTags = React.memo(function PostTags({
    tags,
    onTagClick,
    containerClassName,
    tagClassName,
}: PostTagsProps) {
    return (
        <ul className={containerClassName}>
            {tags.map((tag) => (
                <li
                    key={tag}
                    className={tagClassName}
                    onClick={() => onTagClick?.(tag)}
                    aria-label={`Filter by ${tag}`}
                    tabIndex={0}
                >
                    <Tag tag={tag} onClick={onTagClick} />
                </li>
            ))}
        </ul>
    );
});
