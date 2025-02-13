import { Post } from '@/app/application/core/models/post';
import { useApiService } from '../application/infrastructure/api-service';
import { externalApiRoutes } from '../application/infrastructure/api-service/apiRoutes';

export async function getPostsAction(): Promise<Post[]> {
    try {
        const posts: Post[] = await useApiService.makeApiRequest.get(
            externalApiRoutes.getPosts
        )
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}