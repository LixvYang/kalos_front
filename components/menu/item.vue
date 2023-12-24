<template>
    <div
        class="w-full flex items-center p-2.5 rounded-md hover:bg-gray-200 dark:hover:bg-black"
    >
        <div class="flex items-center lg:mx-0 mx-auto">
            <Icon :name="icon" :color="colorString" :size="sizeString" />
            <span
                :class="`text-[${colorString}]`"
                class="lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px] dark:text-white"
            >
                {{ t(iconString) }}
            </span>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n()

const props = defineProps(['iconString', 'colorString', 'sizeString'])
const { iconString, colorString, sizeString } = toRefs(props)

const icon = ref('')

if (iconString.value === 'home') icon.value = 'mdi:home'
if (iconString.value === 'Following') icon.value = 'ci:group'
if (iconString.value === 'profile')
    icon.value = 'material-symbols:person-outline-rounded'
if (iconString.value === 'collect')
    icon.value = 'fluent-emoji-high-contrast:smiling-face-with-heart-eyes'
if (iconString.value === 'deadline') icon.value = 'heroicons-outline:clock'
</script>
