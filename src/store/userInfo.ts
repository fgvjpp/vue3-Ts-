import { message } from '@/components/XtxUI'
import router from '@/router'
import type { Data, profileType, registerType } from '@/types'
import { http } from '@/utils/http'
import { defineStore } from 'pinia'
import useStore from '.'

const useUserInfoStore = defineStore({
  id: 'UserInfo',
  state: () => ({
    profile: {} as profileType,
    userQQInfo: {} as Data,
    unionId: '',
  }),
  getters: {
    token(): Boolean {
      return Boolean(this.profile.token)
    },
  },
  actions: {
    async getUserInfo(from: { account: string; password: string }) {
      const res = await http<profileType>('POST', '/login', from)
      this.profile = res.data.result
      message({ type: 'success', text: '登录成功', time: 1500 })
      router.replace('/')
    },
    loginOut() {
      const { cart } = useStore()
      cart.cartList = []
      QC.Login.signOut()
      this.profile = {} as profileType
      router.replace('/login')
    },
    getUserCode(mobile: string) {
      http('GET', '/login/social/code', { mobile })
    },
    getRegisterCode(mobile: string) {
      http('GET', '/register/code', { mobile })
    },
    async bindLoignQQ(form: { mobile: string; code: string; unionId: string }) {
      const res = await http<profileType>('POST', '/login/social/bind', form)
      this.profile = res.data.result
      message({ type: 'success', text: '登录成功', time: 1500 })
      router.replace('/')
    },
    async LoginQQ(data: { unionId: string; source: number }) {
      const res = await http<profileType>('POST', '/login/social', data)
      this.profile = res.data.result
      message({ type: 'success', text: '登录成功', time: 1500 })
      router.replace('/')
    },
    async register(data: registerType) {
      const res = await http<profileType>('POST', `/login/social/${data.unionId}/complement`, data)
      this.profile = res.data.result
      message({ type: 'success', text: '注册成功', time: 1500 })
      router.replace('/')
    },
  },
  persist: {
    storage: window.sessionStorage,
    // 设置当前模块需要持久化的数据
    paths: ['profile'],
  },
})
export default useUserInfoStore
