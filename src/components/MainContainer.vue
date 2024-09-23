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
    display: flex;
    align-items: center;
    height: 5.6rem;
    background: var(--nav-background);
    padding: 1.0rem 6.4rem;
}

.main {
    height: calc(100vh - 5.6rem);
    background-color: var(--main-content-background);
    padding: 6.4rem;
    overflow: hidden;
}

@media (max-width: 375px) {
    .main {
        padding: 2.4rem 1.6rem;
    }
}
</style>