import useUsersPageStore from "./users-page.store";
import { computed } from "vue";

export default function useUsersPageObservers() {
    const { users, selectedUserId } = useUsersPageStore();

    const usersList = computed(() => {
        return users.value.map((user) => ({
            name: `${user.firstName} ${user.lastName}`,
            id: user.id
        }));
    })

    const selectedUser = computed(() => {
        return users.value.find((user) => user.id === selectedUserId.value);
    })

    return {
        usersList,
        selectedUser
    }
}