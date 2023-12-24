import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

interface Locale {
    id: number
    name: string
    info: string
}

export const usei18nStore = defineStore('i18nStore', {
    state: () => ({
        currentLacale: { id: 0, name: '中文(简体)', info: 'cn' },
        localeList: ref([
            { id: 0, name: '中文(简体)', info: 'cn' },
            { id: 1, name: 'English(Us)', info: 'en' },
        ]) as Ref<Locale[]>,
    }),
    actions: {
        changeLocale(locale: Locale) {
            this.currentLacale = locale
        },
    },
})
