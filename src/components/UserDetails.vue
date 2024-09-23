<template>
    <div class="container">
        <div class="header">
            <h2>{{ user?.firstName }} {{ user?.lastName }}</h2>
            <button type="button" @click="$emit('click-edit-user')">Edit User</button>
        </div>
        <table class="table">
            <tbody>
                <tr>
                    <th>First name</th>
                    <td>{{ user?.firstName }}</td>
                </tr>
                <tr>
                    <th>Last name</th>
                    <td>{{ user?.lastName }}</td>
                </tr>
                <tr>
                    <th>Date Added</th>
                    <td>{{ user?.createdAt }}</td>
                </tr>
                <tr>
                    <th>ID</th>
                    <td>{{ user?.id }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

type User = {
    firstName: string,
    lastName: string,
    createdAt: string,
    id: string,
}

interface Props {
    user?: User
}

interface Emits {
    (e: 'click-edit-user'): void
}

defineProps<Props>();

defineEmits<Emits>();

// const formattedDateAdded = computed(() => )
</script>

<style scoped>
.container {
    width: 100%;
    border: 1px solid var(--border-color);
    padding: 2.0rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border-radius: var(--border-radius);
    background: var(--container-background);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 1.2rem;
}

.table {
    text-align: left;
}

</style>

