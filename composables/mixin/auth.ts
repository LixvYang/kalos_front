import { usePassport } from '@foxone/mixin-passport/lib/helper'
import { Connect } from './connect'

export const handleMixinAuth = async () => {
    const nuxtApp = useNuxtApp()
    const passport = usePassport(nuxtApp.vueApp)
    // const userStore = useUserStore();
    const isMvm = ref(false)
    const signMsg = ref('')

    //   if (userStore.user.uid) {
    //     return
    //   }

    const { token, channel, mixin_token } = await passport.auth({
        origin: 'Betxin',
        authMethods: ['metamask', 'walletconnect', 'mixin', 'fennec', 'onekey'],
        clientId: '30aad5a5-e5f3-4824-9409-c2ff4152724e',
        scope: 'PROFILE:READ ASSETS:READ SNAPSHOTS:READ',
        pkce: true,
        signMessage: true,
        hooks: {
            beforeSignMessage: async () => {
                // sign a message
                return {
                    statement: "You'll login to your_app by the signature",
                    expirationTime: new Date(
                        new Date().getTime() + 1000 * 60 * 100
                    ).toISOString(),
                }
            },
            onDistributeToken: async (params: any) => {
                if (params.type === 'mixin_token') {
                    return { token: params.token, mixin_token: params.token }
                } else if (params.type === 'signed_message') {
                    isMvm.value = true
                    signMsg.value = params.message
                    return {
                        token: params.signature,
                        mixin_token: params.signature,
                    }
                }
                return { token: params.mixin_code, mixin_token: params.code }
            },
            afterDisconnect() {
                console.log('Disconnect')
            },
        },
    })
    const authData = await passport.sync({
        token,
        channel,
    })
    console.log(authData.channel)
    console.log(authData.token)
    passport.getAssets().then((data) => {
        console.log(data)
    })
    if (!isMvm.value) {
        // store.dispatch('user/handleUserLogin', {
        //   'login_method': 'mixin_token',
        //   'token': token
        // })
        Connect({ login_method: 'mixin_token', mixin_token: token })
    } else {
        Connect({ login_method: 'mvm', sign: token, sign_msg: signMsg.value })

        // store.dispatch('user/handleUserLogin', {
        //   'login_method': 'mvm',
        //   'sign': token,
        //   'sign_msg': signMsg
        // })
    }
    //   cache.deleteCache('auth')
    //   cache.setCache('auth', JSON.stringify({'channel': channel, 'token': token}))
    //   setTimeout(() => {
    //     if (store.state.user.userInfo.uid) {
    //       isMenuOpen.value = false
    //       snackBarText.value = 'Success Connect'
    //       handleProfileClick(snackbar)
    //     }
    //   }, 3000);
}
