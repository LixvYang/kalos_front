export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore()
    if (to.path.search('user') !== 0 && !userStore.getUserInfo.uid) {
        console.log('你好像还没有登录')
        handleMixinAuth()
        return navigateTo('/')
    }

    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    //   if (to.path !== '/') {
    //     return navigateTo('/')
    //   }
})
