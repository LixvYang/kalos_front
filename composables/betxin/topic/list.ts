export interface TopicListReq {
    cid?: number
    page_token?: string
}

export interface Topic {
    tid: string
    cid?: number
    title?: string
    intro?: string
    content?: string
    yes_ratio?: string
    no_ratio?: string
    yes_count?: string
    no_count?: string
    total_count?: string
    collect_count?: number
    read_count?: number
    img_url?: string
    is_stop?: boolean
    is_deleted?: boolean
    refund_end_time?: number
    end_time?: number
    is_collect?: boolean
}

interface TopicListResp {
    list: Topic[]
    pre_page_token: string
}

export const GetTopicListByCid = async (
    req: TopicListReq
): Promise<TopicListResp> => {
    try {
        const res = await http<TopicListResp>({
            method: 'GET',
            url: `/api/v1/topics/${req.cid}`,
            query: {
                page_token: req.page_token,
            },
            header: {
                'Content-Type': 'application/json',
            },
        })

        if (res.code !== 200) {
            throw new Error('连接失败')
        }
        return res.data!
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const LoadMoreTopicList = () => {
    const topicListStore = useTopicListStore()
    const categoryStore = useCategoryStore()

    GetTopicListByCid({
        cid: categoryStore.currentCategory.id,
        page_token: topicListStore.getPageToken(
            categoryStore.currentCategory.name
        ),
    }).then((data) => {
        console.log(data)
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
