import { defineStore } from 'pinia'

export const usePromptStore = defineStore('prompt', () => {
    const currentPrompt = ref('')
    const currentAspectRatio = ref('1:1')
    const currentPromptWord = ref('')
    const currentNumber = ref(1)

    const currentPromptSplit = computed(() => {
        return currentPrompt.value.split(' ')
    })

    function changeCurrentPrompt(prompt: string) {
        currentPrompt.value = prompt
    }

    function changeCurrentAspectRatio(ratio: string) {
        currentAspectRatio.value = ratio
    }
    function changeCurrentPromptWord(word: string) {
        currentPromptWord.value = word
    }

    function changeCurrentNumber(number: number) {
        console.log(number)
        if (number <= 0) {
            number = 1
        }
        if (number >= 100) {
            number = 100
        }
        currentNumber.value = number
    }

    return {
        currentNumber,
        currentPromptWord,
        currentPrompt,
        currentPromptSplit,
        changeCurrentPrompt,
        changeCurrentAspectRatio,
        changeCurrentPromptWord,
        changeCurrentNumber,
    }
})
