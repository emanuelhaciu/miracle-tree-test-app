import { User } from "./user";

export type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
	tags: string[];
	user: User;
};