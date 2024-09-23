<template>
    <div class="users-page">
        <UsersList 
            class="users-list"
            :users-list="usersList"
            :selected-user-id="selectedUser?.id" 
            @click-user="onClickUser" 
            @click-add-user="onClickAddUser" />
            
        <UserDetails 
            v-if="selectedUser" 
            :user="selectedUser" 
            @click-edit-user="onClickEditUser" />
    </div>

    <Teleport to="#modals">
        <Modal modal-name="addUser">
            <UserForm  
                @submit="onSubmitAddUser"
                @cancel="onCancel">
                <template #header>
                    Add User
                </template>
            </UserForm>
        </Modal>

        <Modal modal-name="editUser">
            <UserForm
                :first-name="selectedUser?.firstName"
                :last-name="selectedUser?.lastName"  
                @submit="onSubmitEditUser"
                @cancel="onCancel">
                <template #header>
                    Edit User
                </template>
            </UserForm>
        </Modal>
    </Teleport>
</template>

<script lang="ts" setup>
import useUsersPageCommands from "./state/users-page.commands";
import { onMounted } from "vue";
import UsersList from "../../components/UsersList.vue";
import useUsersPageObservers from "./state/users-page.observers";
import useUsersPageStore from "./state/users-page.store";
import UserDetails from "../../components/UserDetails.vue";
import Modal from "../../components/modal/Modal.vue";
import useModalStore from "../../components/modal/state/modal.store";
import UserForm from "../../components/UserForm.vue";

const { fetchUsers, addNewUser, updateUser }  = useUsersPageCommands();
const { usersList, selectedUser } = useUsersPageObservers();
const { setSelectedUserId } = useUsersPageStore();
const { setActiveModal } = useModalStore();

onMounted(() => {
    fetchUsers();
});

const onClickUser = (userId: string) => {
    setSelectedUserId(userId);
}

const onClickAddUser = () => {
    setActiveModal("addUser");
}

const onSubmitAddUser = (form: {firstName: string, lastName: string}) => {
    addNewUser(form);
    setActiveModal(null);
}

const onClickEditUser = () => {
    setActiveModal("editUser");
}

const onSubmitEditUser = (form: {firstName: string, lastName: string}) => {
    updateUser(form);
    setActiveModal(null);
}

const onCancel = () => {
    setActiveModal(null);
}
</script>

<style scoped>
.users-page {
    display: flex;
    gap: 2rem;
    height: 100%;
}

.users-list {
    max-width: 30.8rem;
}
</style>