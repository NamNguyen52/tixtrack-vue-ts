<template>
    <div class="container">
        <h2 v-if="!usersList.length">No Users Yet</h2>

        <ul class="list" v-else>
            <li class="list-item"
                v-for="user in usersList" 
                :key="user.id" 
                @click="$emit('click-user', user.id)"
                :class="[{'selected-user': user.id === selectedUserId }]">
                {{ user.name }} &#8250;
            </li>
        </ul>

        <button 
            type="button" 
            @click="$emit('click-add-user')">
            + Add User
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
.container {
    border: 1px solid var(--border-color);
    width: 100%;
    padding: 1.6rem;
    border-radius: var(--border-radius);
    background: var(--container-background);
}

.selected-user {
    background: var(--list-item-active);
}

.list {
    height: calc(100% - 5rem);
    overflow: auto;
}

.list-item {
    padding: 1.0rem;
    border-radius: var(--border-radius);
}

.list-item:hover {
    cursor: pointer;
}

.list-item:not(.selected-user):hover {
    background-color: var(--list-item-hover);
}
</style>