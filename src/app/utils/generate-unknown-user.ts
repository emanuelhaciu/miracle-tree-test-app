import { User } from "../application/core/models/user";

export function createUnknownUser(userId: number): User {
    return {
        id: userId,
        name: 'Unknown User',
        username: 'Unknown User',
        email: 'Unknown User',
        address: {
            street: 'Unknown Street',
            zipcode: 'Unknown Zipcode',
        },
        company: {
            name: 'Unknown Company',
            catchPhrase: 'Unknown Catch Phrase',
            bs: 'Unknown BS',
        },
        phone: 'Unknown Phone',
        website: 'Unknown Website',
    };
}