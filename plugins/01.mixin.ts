// import { createApp } from "vue";
import UIKit from '@foxone/uikit'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import { usePresets } from '@foxone/uikit/presets'
import Passport from '@foxone/mixin-passport'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify(usePresets({}))
    nuxtApp.vueApp.use(UIKit)
    nuxtApp.vueApp.use(vuetify)
    nuxtApp.vueApp.use(Passport, {})
})
