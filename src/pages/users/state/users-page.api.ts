import { GetUsersResponse, UserPayload, User } from "./users.page.models";

export function getUsers():Promise<GetUsersResponse> {
    const GET_USERS_URL = 'https://6180472f8bfae60017adfa54.mockapi.io/users';

    return fetch(GET_USERS_URL).then(response => response.json());
}

export function postUser(payload: UserPayload):Promise<User> {
    const POST_USER_URL = 'https://6180472f8bfae60017adfa54.mockapi.io/users';

    return fetch(POST_USER_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json());
}

export function putUser(payload: UserPayload, userId: string):Promise<User> {
    const PUT_USER_URL = `https://6180472f8bfae60017adfa54.mockapi.io/users/${userId}`;

    return fetch(PUT_USER_URL, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json());
}