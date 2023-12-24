<script setup>
import { initFlowbite } from 'flowbite'
const { t } = useI18n()
const userStore = useUserStore()

onMounted(() => {
    initFlowbite()
    handleSwitchModeBtn(
        'theme-toggle-dark-icon1',
        'theme-toggle-light-icon1',
        'theme-toggle1'
    )
})
</script>

<template>
    <div>
        <slot role="main" />

        <div
            class="md:hidden fixed z-30 w-full h-16 max-w-md -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600"
        >
            <div class="grid h-full max-w-lg grid-cols-2 mx-auto">
                <div class="flex items-center justify-center">
                    <button
                        data-tooltip-target="tooltip-home"
                        type="button"
                        class="inline-flex items-center justify-center w-10 h-10 font-medium rounded-full group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                        @click="pushTo('/')"
                    >
                        <svg
                            class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                            />
                        </svg>
                        <span class="sr-only">Home</span>
                    </button>
                    <div
                        id="tooltip-home"
                        role="tooltip"
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Home
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <button
                        id="dropdownTopButton"
                        data-dropdown-toggle="dropdownTop"
                        data-dropdown-placement="top"
                        type="button"
                        class="inline-flex items-center justify-center w-10 h-10 font-medium rounded-full group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                    >
                        <Icon
                            name="material-symbols:person-rounded"
                            color="gray"
                            size="1.5rem"
                        />
                        <span class="sr-only">Profile</span>
                    </button>
                </div>
                <div
                    id="dropdownTop"
                    class="w-1/3 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-22 dark:bg-gray-700"
                >
                    <ul
                        class="w-full py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownRightButton"
                    >
                        <li>
                            <NuxtLink
                                :to="`/user/${userStore.getUserInfo.uid}`"
                            >
                                <button
                                    href="#"
                                    class="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    个人主页
                                </button>
                            </NuxtLink>
                        </li>
                        <li>
                            <button
                                id="theme-toggle1"
                                type="button"
                                class="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <span
                                    id="theme-toggle-dark-icon1"
                                    class="hidden w-5 h-5"
                                    fill="currentColor"
                                    >深色模式</span
                                >
                                <span
                                    id="theme-toggle-light-icon1"
                                    class="hidden w-5 h-5"
                                    fill="currentColor"
                                    >浅色模式</span
                                >
                            </button>
                        </li>
                        <li>
                            <button
                                id="language-toggle"
                                type="button"
                                class="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="
                                    handleLanguageBtn({
                                        id: 0,
                                        name: t('othername'),
                                        info: t('othername'),
                                    })
                                "
                            >
                                {{ t('name') }}
                            </button>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Earnings</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Sign out</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
