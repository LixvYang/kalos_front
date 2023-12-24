<script setup>
const user = useUserStore()

const handleProfileClick = () => {
    if (!user.user.uid) {
        handleMixinAuth()
        return
    }
    pushTo(`/user/${user.user.uid}`)
}
</script>

<template>
    <div
        id="SideNavMain"
        class="hidden md:block lg:w-[220px] w-[75px] fixed z-0 top-16 bg-gray-100 h-full overflow-auto dark:bg-gray-800"
    >
        <div class="lg:w-full w-[55px] mx-auto">
            <NuxtLink to="/">
                <MenuItem
                    icon-string="home"
                    color-string="#6C89D3"
                    size-string="30"
                />
            </NuxtLink>
            <!-- <NuxtLink :to="`/user/${user.getUserInfo.uid}`"> -->
            <div @click="handleProfileClick">
                <MenuItem
                    icon-string="profile"
                    color-string="#6AB48F"
                    size-string="27"
                />
            </div>
            <!-- </NuxtLink> -->
            <MenuItem
                icon-string="collect"
                color-string="#AA66C3"
                size-string="27"
            />
            <MenuItem
                icon-string="deadline"
                color-string="#8A64D0"
                size-string="27"
            />

            <hr
                class="h-px lg:ml-2 mt-2 bg-gray-300 border-0 dark:bg-gray-700"
            />

            <div
                class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"
            >
                Suggested Topics
            </div>

            <div class="lg:hidden block pt-3" />

            <div class="cursor-pointer">
                <MenuItemFollow />
            </div>

            <button
                class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]"
            >
                See all
            </button>

            <hr
                class="lg:block hidden h-px lg:ml-2 mt-2 bg-gray-300 border-0 dark:bg-gray-700"
            />

            <div
                class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"
            >
                Following accounts
            </div>

            <div class="lg:hidden block pt-3" />

            <div class="cursor-pointer">
                <MenuItemFollow />
            </div>

            <button
                class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]"
            >
                See More
            </button>

            <!-- <div class="lg:block hidden border-b lg:ml-2 mt-2" /> -->
            <hr
                class="lg:block hidden h-px lg:ml-2 mt-2 bg-gray-300 border-0 dark:bg-gray-700"
            />

            <div class="lg:block hidden text-[11px] text-gray-500">
                <div class="pt-4 px-2">
                    About Newsroom TikTok Shop Contact Careers ByteDance
                </div>
                <div class="pt-4 px-2">
                    TikTok for Good Advertise Developers Transparency TikTok
                    Rewards TikTok Browse TikTok Embeds
                </div>
                <div class="pt-4 px-2">
                    Help Safety Terms Privacy Creator Portal Community
                    Guidelines
                </div>
                <div class="pt-4 px-2">© 2023 TikTok</div>
            </div>

            <div class="pb-14"></div>
        </div>
    </div>
</template>
