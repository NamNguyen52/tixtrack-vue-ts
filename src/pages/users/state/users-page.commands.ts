import { getUsers } from "./users-page.api"
import useUsersPageStore from "./users-page.store";

export default function useUsersPageCommands() {
    const { setUsers, setStatus } = useUsersPageStore();

    const fetchUsers = async () => {
        setStatus("loading")

        try {
            const response = await getUsers();
            setUsers(response);
        } catch {
            setStatus("error")
        } finally {
            setStatus("idle")
        }
    }

    return {
        fetchUsers
    }
}