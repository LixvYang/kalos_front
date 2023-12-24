<script setup lang="ts">
const promptStore = usePromptStore()
</script>

<template>
    <div id="tabs">
        <div class="flex flex-row relative right-2">
            <span
                v-for="item in promptStore.currentPromptSplit"
                key="item"
                class="bg-purple-400 dark:bg-purple-900 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-purple-400"
            >
                {{ item }}
            </span>
        </div>
    </div>
</template>
