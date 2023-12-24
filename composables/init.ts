import { useCategoryStore } from '../stores/01.category'

export const InitStoreInfo = () => {
    const topicListStore = useTopicListStore()
    const categoryStore = useCategoryStore()

    GetTopicListByCid({
        cid: categoryStore.currentCategory.id,
        page_token: topicListStore.getPageToken(
            categoryStore.currentCategory.name
        ),
    }).then((data) => {
        topicListStore.appendTopicList(
            categoryStore.currentCategory.name,
            data.list
        )
        topicListStore.changeTopicPageToken(
            categoryStore.currentCategory.name,
            data.pre_page_token
        )
    })
}
