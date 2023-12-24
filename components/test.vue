<script setup lang="ts">
const promptStore = usePromptStore()

const handleRatioBtnClick = (
    aras: AspectRatioAttr[],
    currentRatio: AspectRatioAttr
) => {
    aras.forEach((item) => {
        item.disable = !(item.name === currentRatio.name)
    })
    promptStore.changeCurrentAspectRatio(currentRatio.value)
}
</script>

<template>
    <div>
        <div
            class="pl-3 flex justify-beween items-centers mb-4 border-b border-gray-200 dark:border-gray-700"
        >
            <ul
                id="default-tab"
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                data-tabs-toggle="#default-tab-content"
                role="tablist"
            >
                <li class="me-2" role="presentation">
                    <button
                        id="size-tab"
                        class="inline-block p-4 border-b-2 rounded-t-lg"
                        data-tabs-target="#size"
                        type="button"
                        role="tab"
                        aria-controls="size"
                        aria-selected="false"
                    >
                        Size
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button
                        id="style-tab"
                        class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        data-tabs-target="#style"
                        type="button"
                        role="tab"
                        aria-controls="style"
                        aria-selected="false"
                    >
                        Style
                    </button>
                </li>
            </ul>
        </div>
        <div id="default-tab-content">
            <div
                id="size"
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="size-tab"
            >
                <button
                    v-for="ratio in defaultAspectRatios"
                    :key="ratio.name"
                    :style="{ color: ratio.disable ? '' : 'lime' }"
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                    @click="handleRatioBtnClick(defaultAspectRatios, ratio)"
                >
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                    >
                        {{ ratio.name }}({{ ratio.value }})
                    </span>
                </button>
            </div>

            <div
                id="style"
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="style-tab"
            >
                <form>
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Choose Number:</label
                    >
                    <div class="relative flex items-center max-w-[8rem]">
                        <button
                            id="decrement-button"
                            type="button"
                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                            @click="
                                promptStore.changeCurrentNumber(
                                    promptStore.currentNumber - 1
                                )
                            "
                        >
                            <svg
                                class="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h16"
                                />
                            </svg>
                        </button>
                        <input
                            type="text"
                            data-input-counter
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :value="promptStore.currentNumber"
                            required
                        />
                        <button
                            id="increment-button"
                            type="button"
                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                            @click="
                                promptStore.changeCurrentNumber(
                                    promptStore.currentNumber + 1
                                )
                            "
                        >
                            <svg
                                class="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <p
                        id="helper-text-explanation"
                        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                        <select
                            id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option
                                v-for="style in defaultStyles"
                                :key="style.name"
                            >
                                {{ style.name }}
                            </option>
                        </select>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>
