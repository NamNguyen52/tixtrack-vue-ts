export type UserPayload = {
    firstName: string;
    lastName: string;
};

export type User = {
    createdAt: string;
    firstName: string;
    lastName: string;
    id: string;
};

export type GetUsersResponse = User[];