import { getUsers, postUser, putUser } from "./users-page.api";
import useUsersPageStore from "./users-page.store";
import { UserPayload } from "./users.page.models";

export default function useUsersPageCommands() {
    const { 
        setUsers, 
        setStatus, 
        selectedUserId, 
        addUser, 
        updateUserList,
        users,
        setSelectedUserId, 
    } = useUsersPageStore();

    const fetchUsers = async () => {
        setStatus("loading");

        try {
            const response = await getUsers();
            setUsers(response);
            selectFirstUser();
        } catch(error) {
            setStatus("error");
        } finally {
            setStatus("idle");
        }
    }

    const addNewUser = async (payload: UserPayload) => {
        try {
            const newUser = await postUser(payload);
            addUser(newUser);
        } catch(error) {
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

    const selectFirstUser = () => {
        if (users.value.length) {
            setSelectedUserId(users.value[0].id);
        }
    }

    return {
        fetchUsers,
        addNewUser,
        updateUser,
        selectFirstUser
    }
}