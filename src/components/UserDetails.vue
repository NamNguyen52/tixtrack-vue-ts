<template>
    <div>
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
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
}

.table {
    text-align: left;
}

</style>

