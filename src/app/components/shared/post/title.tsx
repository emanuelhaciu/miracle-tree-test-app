import Link from "next/link";
import { Title } from "../title";

interface PostTitleProps {
    title: string;
    className?: string;
    postId: number;
}

export function PostTitle({ title, className, postId }: PostTitleProps) {
    return (
        <Link href={`/post/${postId}`}>
            <Title title={title} className={className} />
        </Link>
    )
}