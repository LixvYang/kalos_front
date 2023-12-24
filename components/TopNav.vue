<script setup>
import { initFlowbite } from 'flowbite'

const i18nStore = usei18nStore()
let languageDropdown

onMounted(() => {
    initFlowbite()
    handleSwitchModeBtn(
        'theme-toggle-dark-icon',
        'theme-toggle-light-icon',
        'theme-toggle'
    )

    const languageDropwownMenu = document.getElementById(
        'language-dropdown-menu'
    )
    const languageDropwownBtn = document.getElementById(
        'language-dropdown-switch'
    )
    languageDropdown = new Dropdown(languageDropwownMenu, languageDropwownBtn)
})

function handleLanguageDropdownBtn(locate) {
    handleLanguageBtn(locate)
    languageDropdown.hide()
}
</script>

<template>
    <div id="top-nav">
        <nav
            class="fixed w-full z-20 bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
        >
            <div
                class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
            >
                <div class="flex items-center relative">
                    <NuxtLink
                        to="/"
                        class="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <NuxtImg
                            class="w-10 h-10 rounded-full"
                            src="/favicon.jpg"
                            alt="Flowbite Logo"
                        />

                        <span
                            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white underline underline-offset-3 decoration-4 decoration-purple-400 dark:decoration-purple-600"
                            >Kalos
                        </span>
                    </NuxtLink>
                </div>

                <div id="top-nav-btns" class="relative left-1 flex flex-start">
                    <button
                        type="button"
                        class="hidden md:block relative right-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        @click="handleMixinAuth()"
                    >
                        Connect
                    </button>

                    <div
                        class="hidden md:block items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"
                    >
                        <button
                            id="language-dropdown-switch"
                            type="button"
                            data-dropdown-toggle="language-dropdown-menu"
                            class="inline-flex items-center font-medium justify-center relative px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                        >
                            <svg
                                v-if="i18nStore.currentLacale.id === 1"
                                class="w-5 h-5 rounded-full me-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 3900 3900"
                            >
                                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                                <path
                                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                    stroke="#fff"
                                    stroke-width="300"
                                />
                                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                                <g fill="#fff">
                                    <g id="d">
                                        <g id="c">
                                            <g id="e">
                                                <g id="b">
                                                    <path
                                                        id="a"
                                                        d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                                    />
                                                    <use
                                                        xlink:href="#a"
                                                        y="420"
                                                    />
                                                    <use
                                                        xlink:href="#a"
                                                        y="840"
                                                    />
                                                    <use
                                                        xlink:href="#a"
                                                        y="1260"
                                                    />
                                                </g>
                                                <use xlink:href="#a" y="1680" />
                                            </g>
                                            <use
                                                xlink:href="#b"
                                                x="247"
                                                y="210"
                                            />
                                        </g>
                                        <use xlink:href="#c" x="494" />
                                    </g>
                                    <use xlink:href="#d" x="988" />
                                    <use xlink:href="#c" x="1976" />
                                    <use xlink:href="#e" x="2470" />
                                </g>
                            </svg>
                            <svg
                                v-if="i18nStore.currentLacale.id === 0"
                                id="flag-icon-css-cn"
                                class="w-5 h-5 rounded-full me-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                            >
                                <defs>
                                    <path
                                        id="a"
                                        fill="#ffde00"
                                        d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                                    />
                                </defs>
                                <path fill="#de2910" d="M0 0h512v512H0z" />
                                <use
                                    width="30"
                                    height="20"
                                    transform="matrix(76.8 0 0 76.8 128 128)"
                                    xlink:href="#a"
                                />
                                <use
                                    width="30"
                                    height="20"
                                    transform="rotate(-121 142.6 -47) scale(25.5827)"
                                    xlink:href="#a"
                                />
                                <use
                                    width="30"
                                    height="20"
                                    transform="rotate(-98.1 198 -82) scale(25.6)"
                                    xlink:href="#a"
                                />
                                <use
                                    width="30"
                                    height="20"
                                    transform="rotate(-74 272.4 -114) scale(25.6137)"
                                    xlink:href="#a"
                                />
                                <use
                                    width="30"
                                    height="20"
                                    transform="matrix(16 -19.968 19.968 16 256 230.4)"
                                    xlink:href="#a"
                                />
                            </svg>
                            {{ i18nStore.currentLacale.name }}
                        </button>
                        <div
                            id="language-dropdown-menu"
                            class="z-30 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                        >
                            <ul class="py-2 font-medium" role="none">
                                <li>
                                    <span
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem"
                                        @click="
                                            handleLanguageDropdownBtn({
                                                id: 1,
                                                name: 'English(US)',
                                                info: 'en',
                                            })
                                        "
                                    >
                                        <div class="inline-flex items-center">
                                            <svg
                                                id="flag-icon-css-us"
                                                aria-hidden="true"
                                                class="h-3.5 w-3.5 rounded-full me-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <g fill-rule="evenodd">
                                                    <g stroke-width="1pt">
                                                        <path
                                                            fill="#bd3d44"
                                                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                            transform="scale(3.9385)"
                                                        />
                                                        <path
                                                            fill="#fff"
                                                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                            transform="scale(3.9385)"
                                                        />
                                                    </g>
                                                    <path
                                                        fill="#192f5d"
                                                        d="M0 0h98.8v70H0z"
                                                        transform="scale(3.9385)"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                        transform="scale(3.9385)"
                                                    />
                                                </g>
                                            </svg>
                                            English (US)
                                        </div>
                                    </span>
                                </li>

                                <li>
                                    <span
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem"
                                        @click="
                                            handleLanguageDropdownBtn({
                                                id: 0,
                                                name: '中文(简体)',
                                                info: 'cn',
                                            })
                                        "
                                    >
                                        <div class="inline-flex items-center">
                                            <svg
                                                id="flag-icon-css-cn"
                                                class="h-3.5 w-3.5 rounded-full me-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 512 512"
                                            >
                                                <defs>
                                                    <path
                                                        id="a"
                                                        fill="#ffde00"
                                                        d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                                                    />
                                                </defs>
                                                <path
                                                    fill="#de2910"
                                                    d="M0 0h512v512H0z"
                                                />
                                                <use
                                                    width="30"
                                                    height="20"
                                                    transform="matrix(76.8 0 0 76.8 128 128)"
                                                    xlink:href="#a"
                                                />
                                                <use
                                                    width="30"
                                                    height="20"
                                                    transform="rotate(-121 142.6 -47) scale(25.5827)"
                                                    xlink:href="#a"
                                                />
                                                <use
                                                    width="30"
                                                    height="20"
                                                    transform="rotate(-98.1 198 -82) scale(25.6)"
                                                    xlink:href="#a"
                                                />
                                                <use
                                                    width="30"
                                                    height="20"
                                                    transform="rotate(-74 272.4 -114) scale(25.6137)"
                                                    xlink:href="#a"
                                                />
                                                <use
                                                    width="30"
                                                    height="20"
                                                    transform="matrix(16 -19.968 19.968 16 256 230.4)"
                                                    xlink:href="#a"
                                                />
                                            </svg>
                                            中文 (简体)
                                        </div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="theme-toggle">
                        <button
                            type="button"
                            class="hidden md:block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                        >
                            <svg
                                id="theme-toggle-dark-icon"
                                class="hidden w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                ></path>
                            </svg>
                            <svg
                                id="theme-toggle-light-icon"
                                class="hidden w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
