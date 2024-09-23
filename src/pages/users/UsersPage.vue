<template>
    <div class="users-page">
        <UsersList :users-list="usersList" @click-user="onClickUser" @click-add-user="onClickAddUser" />
        <UserDetails v-if="selectedUser" :user="selectedUser" />
    </div>
</template>

<script lang="ts" setup>
import useUsersPageCommands from "./state/users-page.commands";
import { onMounted } from "vue";
import UsersList from "../../components/UsersList.vue";
import useUsersPageObservers from "./state/users-page.observers";
import useUsersPageStore from "./state/users-page.store";
import UserDetails from "../../components/UserDetails.vue";

const { fetchUsers }  = useUsersPageCommands();
const { usersList, selectedUser } = useUsersPageObservers();
const { setSelectedUserId } = useUsersPageStore();

onMounted(() => {
    fetchUsers();
});

const onClickUser = (userId: string) => {
    setSelectedUserId(userId);
}

const onClickAddUser = () => {
    console.log("onClickAddUser");
}
</script>

<style scoped>
.users-page {
    display: flex;
}
</style>