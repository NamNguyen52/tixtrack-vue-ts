import { ref } from "vue";
import { User } from "./users.page.models";

type Statuses = "loading" | "error" | "idle";

let users = ref<User[]>([]);
let status = ref<Statuses>("idle");
let selectedUserId = ref<string | null >(null);

export default function useUsersPageStore() {

    const setUsers = (usersToSet: User[] ) => {
        users.value = usersToSet;
    }

    const setStatus = (newStatus: Statuses) => {
        status.value = newStatus;
    }

    const setSelectedUserId = (userId: string) => {
        selectedUserId.value = userId;
    }

    const addUser = (user: User) => {
        users.value.push(user);
    }

    const updateUserList = (updatedUser: User) => {
        users.value = users.value.map((user) => {
            if (user.id === updatedUser.id) {
                return updatedUser;
            }
            
            return user
        });
    }

    return {
        users,
        status,
        selectedUserId,
        setUsers,
        setStatus,
        setSelectedUserId,
        addUser,
        updateUserList,
    }
}