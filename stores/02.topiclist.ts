import { defineStore } from 'pinia'
import { useCategoryStore } from './01.category'
import { type Topic } from '~/composables/betxin/topic/list'

export const useTopicListStore = defineStore('topic', {
    state: () => ({
        BusinessList: [] as Topic[],
        BusinessToken: '',
        CryptoList: [] as Topic[],
        CryptoToken: '',
        SportsList: [] as Topic[],
        SportsToken: '',
        GamesList: [] as Topic[],
        GamesToken: '',
        NewsList: [] as Topic[],
        NewsToken: '',
        TrendingList: [] as Topic[],
        TrendingToken: '',
        OthersList: [] as Topic[],
        OthersToken: '',
    }),
    getters: {
        getCurrentTopicList: (state) => {
            const categoryStore = useCategoryStore()
            return (state as any)[`${categoryStore.currentCategory.name}List`]
        },
        getCurrentTopicToken: (state) => {
            const categoryStore = useCategoryStore()
            return (state as any)[`${categoryStore.currentCategory.name}Token`]
        },
        getPageToken: (state) => {
            return (name: string) => (state as any)[`${name}Token`]
        },
    },
    actions: {
        appendTopicList(name: string, topicList: Topic[]) {
            ;(this as any)[`${name}List`].push(...topicList)
        },
        changeTopicPageToken(name: string, token: string) {
            ;(this as any)[`${name}Token`] = token
        },
    },
})
