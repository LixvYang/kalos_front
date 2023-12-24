<script setup lang="ts">
// import { usePassport } from '@foxone/mixin-passport/lib/helper'
// import { type Topic } from '~/composables/betxin/topic/list'
// import { GetTopicByTid } from '~/composables/betxin/topic/get'

// definePageMeta({})
// const { t } = useI18n()
// const route = useRoute()
// const userStore = useUserStore()
// const topicStore = useTopicStore()
// const item = ref<Topic>({
//     tid: '0',
// })

// GetTopicByTid(route.params.tid as string).then((topic) => {
//     item.value = topic
//     topicStore.changeCurrentTopic(topic)
// })

// const getDate = (timestamp: number): string => {
//     return `${new Date(timestamp).toLocaleString('zh-CN', {
//         timeZone: 'Asia/Shanghai',
//     })} GMT+08`
// }

// const handleBuyBtnClick = () => {
//     if (!userStore.user.uid) {
//         handleMixinAuth()
//     }

//     const nuxtApp = useNuxtApp()
//     const passport = usePassport(nuxtApp.vueApp)

//     setTimeout(async () => {
//         const res = await passport.payment({
//             assetId: '965e5c6e-434c-3fa9-b780-c50f43cd955c',
//             amount: '1',
//             recipient: 'fbd26bc6-3d04-4964-a7fe-a540432b16e2',
//             traceId: 'fbd26bc6-434c-3fa9-b780-c50f43cd9551',
//             memo: 'Test',
//             checker: async () => {
//                 return new Promise(() => {})
//             },
//         })

//         console.log(res)
//     }, 3000)
// }

// onMounted(() => {
//     ;(window as any).Talkee.show({
//         apiBase: 'http://127.0.0.1:4444/api',
//         slug: window.location.pathname,
//         siteId: '36',
//         locale: 'en',
//         showLink: true,
//         container: '#talkee-comments',
//         auth: {
//             authMethods: ['metamask', 'walletconnect', 'mixin', 'fennec'],
//         },
//     })
// })
</script>

<template></template>
