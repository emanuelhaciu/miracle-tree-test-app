import { Post } from '@/app/application/core/models/post';
import { useApiService } from '../application/infrastructure/api-service';
import { externalApiRoutes } from '../application/infrastructure/api-service/apiRoutes';
import { User } from '../application/core/models/user';
import { generateHashtags } from '../utils/generate-hash-tags';

export async function getPostsAction(): Promise<Post[]> {
    try {
        const posts: Post[] = await useApiService.makeApiRequest.get(
            externalApiRoutes.getPosts
        )
        return posts.map(post => ({
            ...post,
            tags: generateHashtags(post.title, post.body)
        }));
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getUserByIdAction(id: number): Promise<User> {
    try {
        const response = await useApiService.makeApiRequest.get<User>(
            externalApiRoutes.getUsers.replace(':id', id.toString())
        );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}