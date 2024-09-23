// List users GET https://6180472f8bfae60017adfa54.mockapi.io/users
// Add new user POST https://6180472f8bfae60017adfa54.mockapi.io/users
// Edit an existing user PUT https://6180472f8bfae60017adfa54.mockapi.io/users/id

import { GetUsersResponse } from "./users.page.models";

export function getUsers():Promise<GetUsersResponse> {
    const GET_USERS_URL = 'https://6180472f8bfae60017adfa54.mockapi.io/users';

    return fetch(GET_USERS_URL).then(response => response.json())
}