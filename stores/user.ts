// stores/user.ts
import { defineStore } from 'pinia'

export interface User {
    uid?: string
    full_name?: string
    avatar_url?: string
    identity_number?: string
    biography?: string
    client_id?: string
    is_mvm_user?: boolean
}

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            user: {} as User,
        }
    },
    getters: {
        getUserInfo: (state) => state.user,
    },
    actions: {
        changeToken(token: string) {
            this.token = token
        },
        changeUser(user: User) {
            this.user = user
        },
    },
})
