import { Post } from "@/app/application/core/models/post";
export type PostTagMap = Map<string, Set<number>>;
export type SerializedPostTagMap = Record<string, number[]>;

export function createPostTagMap(posts: Post[]): PostTagMap {
  const tagMap = new Map<string, Set<number>>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, new Set());
      }
      tagMap.get(tag)!.add(post.id);
    });
  });
  
  return tagMap;
}

export function serializeTagMap(tagMap: PostTagMap): SerializedPostTagMap {
  const serialized: SerializedPostTagMap = {};
  tagMap.forEach((postIds, tag) => {
    serialized[tag] = Array.from(postIds);
  });
  return serialized;
}

export function truncateBody(body: string, maxLength: number = 100): string {
  if (body.length <= maxLength) {
      return body;
  }
  return body.substring(0, maxLength - 3) + '...';
}