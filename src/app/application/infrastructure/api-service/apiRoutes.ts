type ApiRoutes = {
    getPosts: string;
    getPostById: string;
    getUserById: string;
    getUsers: string;
};

export const externalApiRoutes: ApiRoutes = {
	getPosts: `${process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL}/posts`,
    getPostById: `${process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL}/posts/:id`,
	getUserById: `${process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL}/users/:id`,
	getUsers: `${process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL}/users`,
};
