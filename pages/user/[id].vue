<script setup>
definePageMeta({
    middleware: ['auth'],
})
</script>

<template>
    <div id="user">
        <NuxtLayout name="main-layout">
            <UserInfo id="user-info" />
        </NuxtLayout>
    </div>
</template>
