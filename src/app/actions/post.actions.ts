import { Post } from '@/app/application/core/models/post';
import { useApiService } from '../application/infrastructure/api-service';
import { externalApiRoutes } from '../application/infrastructure/api-service/apiRoutes';
import { User } from '../application/core/models/user';
import { generateHashtags } from '../utils/generate-hash-tags';
import { createUnknownUser } from '../utils/generate-unknown-user';

export async function getPostsAndUsersAction(): Promise<Post[]> {
    try {
        const [postsResponse, usersResponse] = await Promise.all([
            useApiService.makeApiRequest.get<Post[]>(externalApiRoutes.getPosts),
            useApiService.makeApiRequest.get<User[]>(externalApiRoutes.getUsers)
        ]);
        
        const posts = postsResponse ?? [];
        const users = usersResponse ?? [];

        const usersMap = new Map(users.map(user => [user.id, user]));
        return posts.map(post => {
            const user = usersMap.get(post.userId) ?? createUnknownUser(post.userId);
            
            return {
                ...post,
                tags: generateHashtags(post.title, post.body),
                user
            };
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getPostsAction(): Promise<Post[]> {
    try {
        const posts = await useApiService.makeApiRequest.get<Post[]>(externalApiRoutes.getPosts);
        return posts.map(post => ({
            ...post,
            tags: generateHashtags(post.title, post.body),
        }));
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getUserByIdAction(id: number): Promise<User> {
    try {
        const response = await useApiService.makeApiRequest.get<User>(
            externalApiRoutes.getUserById.replace(':id', id.toString())
        );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}