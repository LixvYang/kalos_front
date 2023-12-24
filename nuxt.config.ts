// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true, // or false to disable
        productionTip: false,
    },
    ssr: false,
    app: {
        head: {
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js',
                },
                {
                    src: 'https://cdn.jsdelivr.net/npm/@foxone/mvm@0.1.37/dist/mvm.min.js',
                },
                // {
                //     src: 'https://cdn.jsdelivr.net/npm/@foxone/talkee@3.0.1/dist/index.umd.js',
                // },
            ],
            link: [
                // {
                //     rel: 'stylesheet',
                //     href: 'https://cdn.jsdelivr.net/npm/@foxone/talkee@3.0.1/dist/style.css',
                // },
            ],
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxt/image',
        'radix-vue/nuxt',
    ],
    i18n: {
        vueI18n: './locales/nuxt-i18n.ts',
    },
    plugins: ['~/plugins/01.mixin', { src: '~/plugins/02.scroll', ssr: false }],
    build: {
        transpile: ['vuetify', 'foxone'],
    },
})
