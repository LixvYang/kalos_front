<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const promptStore = usePromptStore()
const isShowSetting = ref(false)
onMounted(() => {
    initFlowbite()
})
</script>

<template>
    <div
        id="home"
        class="left-24 top-16 pb-12 flex flex-col justify-between mx-auto max-w-xl px-0 bg-gray-100 dark:bg-gray-800 border-solid border-t border-gray-300 dark:border-gray-600"
    >
        <div class="flex items-center justify-center p-4">
            <svg
                class="fill-purple-500"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_28_724)">
                    <path
                        d="M8.399 3L12.799 14H10.644L9.443 11H5.353L4.154 14H2L6.399 3H8.399ZM7.399 5.885L6.152 9H8.644L7.399 5.885Z"
                    ></path>
                    <path
                        d="M7.625 12.5V20.3932C7.625 20.6611 7.73835 20.9131 7.93181 21.0951C8.12449 21.2765 8.38154 21.3748 8.6448 21.375H20.3552L20.358 21.375C20.6201 21.373 20.8751 21.2744 21.0669 21.0939C21.2594 20.9127 21.373 20.6625 21.375 20.3959V10.6068C21.375 10.0439 20.8969 9.625 20.3552 9.625H12.6646L13.4535 11.5972H19.325V16.471L16.5157 13.8249C16.322 13.6428 16.0639 13.5442 15.7993 13.5442C15.5348 13.5442 15.2766 13.6428 15.0829 13.8249L9.675 18.9104V15.6245L8.4278 12.5H7.625Z"
                    ></path>
                    <path
                        d="M17.8284 4.17157C17.0783 3.42143 16.0609 3 15 3H12V5H15C15.5304 5 16.0391 5.21071 16.4142 5.58579C16.7893 5.96086 17 6.46957 17 7V8.5H19V7C19 5.93913 18.5786 4.92172 17.8284 4.17157Z"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0_28_724">
                        <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="flex items-center justify-center p-4">
            <div>
                <p
                    class="flex items-center justify-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
                >
                    Create AI Art With
                </p>
                <p
                    class="flex items-center justify-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-purple-600 dark:text-purple-500"
                >
                    Kalos
                </p>
            </div>
        </div>

        <div class="p-4">
            <div
                class="mb-4 border border-gray-400 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            >
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <textarea
                        id="comment"
                        v-model="promptStore.currentPromptWord"
                        resize-none
                        rows="8"
                        maxlength="400"
                        class="w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-2 dark:text-white dark:placeholder-gray-400"
                        placeholder="Generate your AI Art with Kalos"
                        required
                        @change="
                            promptStore.changeCurrentPromptWord(
                                promptStore.currentPromptWord
                            )
                        "
                    >
                    </textarea>
                </div>

                <div
                    class="grid h-12 max-w-lg grid-cols-2 mx-auto dark:border-gray-600"
                >
                    <div
                        class="flex items-center justify-center"
                        data-accordion="collapse"
                    >
                        <button
                            type="button"
                            class="py-2.5 px-4 w-40 text-xs text-center text-white bg-blue-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-collapse-body-1"
                            @click="isShowSetting = !isShowSetting"
                        >
                            <Icon
                                size="16"
                                name="material-symbols:rule-settings-rounded"
                            />
                            Settings
                        </button>
                    </div>

                    <div class="flex items-center justify-center">
                        <button
                            type="submit"
                            class="py-2.5 px-4 w-40 text-xs text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                            <Icon
                                size="16"
                                name="streamline:ai-generate-landscape-image-spark"
                            />
                            Generate
                        </button>
                    </div>
                </div>

                <Test id="accordion-collapse-body-1" class="hidden" />
            </div>

            <p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
                Remember, contributions to this topic should follow our
                <a
                    href="#"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >Community Guidelines</a
                >.
            </p>
        </div>
    </div>
</template>
