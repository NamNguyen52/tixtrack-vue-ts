<template>
    <div class="container">
        <div class="header">
            <h2>{{ user?.firstName }} {{ user?.lastName }}</h2>
            <button type="button" @click="$emit('click-edit-user')">&#9998; Edit User</button>
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
                    <td>{{ formattedDateAdded }}</td>
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
import { format } from "date-fns";

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

defineEmits<Emits>();

const props = defineProps<Props>();

const formattedDateAdded = computed(() => {
    return props.user?.createdAt ? 
        format(new Date(props.user.createdAt), "LLLL d, y h:mm aa") : null;
});
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2.0rem;
    gap: 1.2rem;
    background: var(--container-background);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
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

