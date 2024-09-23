<template>
    <div class="container">
        <nav class="nav">
            <h1>Users</h1>
        </nav>
        <main class="main">
            <slot></slot>
        </main>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.nav {
    height: 5.6rem;
    background: green;
}

.main {
    height: 100%;
    background: red;
    padding: 6.4rem;
}

@media (max-width: 375px) {
    .main {
        padding: 2.4rem 1.6rem;
    }
}
</style>