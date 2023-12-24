<script setup>
onMounted(() => {})
const router = useRouter()
console.log()

const props = defineProps({
    isShowTabSearch: Boolean,
})
</script>

<template>
    <div
        class="fixed w-full h-full px-0 overflow-auto bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
    >
        <TopNav />
        <div class="max-w-[1140px] mx-auto relative md:top-16 top-[52px]">
            <div id="search-form">
                <slot />
            </div>
        </div>
    </div>
</template>
