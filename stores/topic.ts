import { defineStore } from 'pinia'
import { type Topic } from '~/composables/betxin/topic/list'

export const useTopicStore = defineStore('topic', () => {
    const currentTopic = ref<Topic>({
        tid: '0',
        cid: 1,
        title: 'test',
        intro: 'test',
        content: 'test',
        yes_ratio: '50.00',
        no_ratio: '50.00',
        yes_count: '0',
        no_count: '0',
        total_count: '0',
        collect_count: 0,
        read_count: 0,
        img_url: '',
        is_stop: true,
        refund_end_time: 0,
        end_time: 0,
        is_collect: false,
    })

    function changeCurrentTopic(topic: Topic) {
        currentTopic.value = topic
    }

    return {
        currentTopic,
        changeCurrentTopic,
    }
})
