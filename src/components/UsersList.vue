<template>
    <div>
        <ul>
            <li 
                v-for="user in usersList" 
                :key="user.id" 
                @click="$emit('click-user', user.id)"
                :class="[{'selected-user': user.id === selectedUserId }]">
                {{ user.name }}
            </li>
        </ul>

        <button 
            type="button" 
            @click="$emit('click-add-user')">
            Add User
        </button>
    </div>
</template>

<script lang="ts" setup>

type UserListItem = {
    name: string;
    id: string;
}

interface Props {
    usersList: UserListItem[];
    selectedUserId?: string;
}

interface Emits {
    (e: 'click-user', id: string): void
    (e: 'click-add-user'): void
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<style scoped>
.selected-user {
    background: black;
}
</style>