import { useUserStore, type User } from '~/stores/user'

interface ConnectReq {
    login_method?: string
    mixin_token?: string
    sign?: string
    sign_msg?: string
}

interface ConnectResp {
    token?: string
}

export const Connect = async (req: ConnectReq): Promise<string> => {
    const userStore = useUserStore()
    // 定义请求参数
    // 开始请求
    const res = await http<ConnectResp>({
        method: 'POST',
        url: '/api/v1/connect',
        body: req,
        header: {
            'Content-Type': 'application/json',
        },
    })
    if (res.code !== 200) {
        console.log('连接失败')
    }

    const ress = await http<User>({
        method: 'GET',
        url: '/api/v1/user',
        header: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${res.data?.token}`,
        },
    })

    console.log(ress.data)

    userStore.changeUser(ress.data ?? {})

    return ''
}
