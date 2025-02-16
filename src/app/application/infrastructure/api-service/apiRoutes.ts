export const externalApiRoutes = {
	getPosts: `${process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL}/posts`,
    getPostById: `${process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL}/posts/:id`,
	getUsers: `${process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL}/users/:id`,
};
