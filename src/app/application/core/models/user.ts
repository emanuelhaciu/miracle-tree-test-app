export type User = {
    name: string;
    address: {
        street: string;
        zipcode: string;
    },
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    },
    email: string;
    phone: string;
    website: string;
    username: string;
}