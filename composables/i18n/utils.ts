export const handleLanguageBtn = (locate: any) => {
    const i18nStore = usei18nStore()
    const nuxtApp = useNuxtApp()
    nuxtApp.$i18n.setLocale(locate.info)
    i18nStore.changeLocale(locate)
}
