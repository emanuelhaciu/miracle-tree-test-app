'use client';

import { Post } from "@/app/application/core/models/post";
import { User } from "@/app/application/core/models/user";
interface PostDetailsProps {
  post: Post;
  user: User;
}

export default function PostDetails({ post, user }: PostDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-600 my-4">{post.body}</p>
      <p className="text-gray-500">Post ID: {post.id}</p>
      <p className="text-gray-500">Author: {user.name}</p>
    </div>
  );
} 