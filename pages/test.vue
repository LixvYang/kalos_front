<template>
    <div>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
                id="default-tab"
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                data-tabs-toggle="#default-tab-content"
                role="tablist"
            >
                <li class="me-2" role="presentation">
                    <button
                        id="profile-tab"
                        class="inline-block p-4 border-b-2 rounded-t-lg"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        Profile
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button
                        id="dashboard-tab"
                        class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                    >
                        Dashboard
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button
                        id="settings-tab"
                        class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        data-tabs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                    >
                        Settings
                    </button>
                </li>
                <li role="presentation">
                    <button
                        id="contacts-tab"
                        class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        data-tabs-target="#contacts"
                        type="button"
                        role="tab"
                        aria-controls="contacts"
                        aria-selected="false"
                    >
                        Contacts
                    </button>
                </li>
            </ul>
        </div>
        <div id="default-tab-content">
            <div
                id="profile"
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="profile-tab"
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
                id="dashboard"
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
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
                id="settings"
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="settings-tab"
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
                id="contacts"
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                role="tabpanel"
                aria-labelledby="contacts-tab"
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
