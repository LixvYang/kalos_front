import type { Topic } from './list'

export const GetTopicByTid = async (tid: string): Promise<Topic> => {
    try {
        const res = await http<Topic>({
            method: 'GET',
            url: `/api/v1/topic/${tid}`,
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
