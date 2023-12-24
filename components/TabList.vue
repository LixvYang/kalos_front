<script setup>
import { Tabs } from 'flowbite'

onMounted(() => {
    const tabsElement = document.getElementById('tabs-example')

    // create an array of objects with the id, trigger element (eg. button), and the content element
    const tabElements = [
        {
            id: 'profile',
            triggerEl: document.querySelector('#profile-tab-example'),
            targetEl: document.querySelector('#profile-example'),
        },
        {
            id: 'dashboard',
            triggerEl: document.querySelector('#dashboard-tab-example'),
            targetEl: document.querySelector('#dashboard-example'),
        },
        {
            id: 'settings',
            triggerEl: document.querySelector('#settings-tab-example'),
            targetEl: document.querySelector('#settings-example'),
        },
        {
            id: 'contacts',
            triggerEl: document.querySelector('#contacts-tab-example'),
            targetEl: document.querySelector('#contacts-example'),
        },
    ]

    // options with default values
    const options = {
        defaultTabId: 'settings',
        activeClasses:
            'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
        inactiveClasses:
            'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    }

    // instance options with default values
    const instanceOptions = {
        id: 'tabs-example',
        override: true,
    }

    const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions)

    // shows another tab element
    tabs.show('dashboard')

    // get the tab object based on ID
    tabs.getTab('contacts')

    // get the current active tab object
    tabs.getActiveTab()
})
</script>
<!-- id="tab-list" class=""  -->
<template>
    <div
        id="tab-list"
        class="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
    >
        <div
            class="flex flex-row overflow-x-auto whitespace-nowrap mb-4 border-b border-gray-200 dark:border-gray-700"
        >
            <ul
                id="tabs-example"
                class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
                role="tablist"
            >
                <li class="me-2" role="presentation">
                    <button
                        id="profile-tab-example"
                        class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                        type="button"
                        role="tab"
                        aria-controls="profile-example"
                        aria-selected="false"
                    >
                        Profile
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button
                        id="dashboard-tab-example"
                        class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                        type="button"
                        role="tab"
                        aria-controls="dashboard-example"
                        aria-selected="false"
                    >
                        Dashboard
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button
                        id="settings-tab-example"
                        class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                        type="button"
                        role="tab"
                        aria-controls="settings-example"
                        aria-selected="false"
                    >
                        Settings
                    </button>
                </li>
                <li class="" role="presentation">
                    <button
                        id="contacts-tab-example"
                        class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                        type="button"
                        role="tab"
                        aria-controls="contacts-example"
                        aria-selected="false"
                    >
                        Contacts
                    </button>
                </li>
            </ul>
        </div>
        <div id="tabContentExample">
            <div
                id="profile-example"
                class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="profile-tab-example"
            >
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the
                    <strong class="font-medium text-gray-800 dark:text-white"
                        >Profile tab's associated content</strong
                    >. Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </p>
            </div>
            <div
                id="dashboard-example"
                class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="dashboard-tab-example"
            >
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the
                    <strong class="font-medium text-gray-800 dark:text-white"
                        >Dashboard tab's associated content</strong
                    >. Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </p>
            </div>
            <div
                id="settings-example"
                class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="settings-tab-example"
            >
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the
                    <strong class="font-medium text-gray-800 dark:text-white"
                        >Settings tab's associated content</strong
                    >. Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </p>
            </div>
            <div
                id="contacts-example"
                class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="contacts-tab-example"
            >
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the
                    <strong class="font-medium text-gray-800 dark:text-white"
                        >Contacts tab's associated content</strong
                    >. Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </p>
            </div>
        </div>
    </div>
</template>
