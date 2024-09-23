import { getUsers, postUser, putUser } from "./users-page.api";
import useUsersPageStore from "./users-page.store";
import { UserPayload } from "./users.page.models";

export default function useUsersPageCommands() {
    const { 
        setUsers, 
        setStatus, 
        selectedUserId, 
        addUser, 
        updateUserList 
    } = useUsersPageStore();

    const fetchUsers = async () => {
        setStatus("loading");

        try {
            const response = await getUsers();
            setUsers(response);
        } catch {
            setStatus("error");
        } finally {
            setStatus("idle");
        }
    }

    const addNewUser = async (payload: UserPayload) => {
        try {
            const newUser = await postUser(payload);
            addUser(newUser);
        } catch {
            setStatus("error");
        }
    }

    const updateUser = async (payload: UserPayload) => {
        try {
            const updatedUser = await putUser(payload, selectedUserId.value as string);
            updateUserList(updatedUser);
        } catch {
            setStatus("error");
        }
    }

    return {
        fetchUsers,
        addNewUser,
        updateUser
    }
}