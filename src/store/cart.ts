import { message } from '@/components/XtxUI'
import type { cartListType, totalPriceAndQuantityType } from '@/types'
import { http } from '@/utils/http'
import { defineStore } from 'pinia'
import useStore from '.'

const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [] as cartListType[],
  }),
  getters: {
    totalPriceAndQuantity(): totalPriceAndQuantityType {
      return this.cartList.reduce(
        (data, item) => {
          data.totalPrice += +item.price * item.count
          data.quantity += item.count
          return data
        },
        { totalPrice: 0, quantity: 0 }
      )
    },
    isLogin(): boolean {
      const { userInfo } = useStore()
      return Boolean(userInfo.profile.token)
    },
  },
  actions: {
    async addCart(data: { skuId: string; count: number }) {
      if (this.isLogin) {
        await http('POST', '/member/cart', data)
        this.getCartList()
      } else {
        message({ type: 'error', text: '您还未登录', time: 1500 })
      }
    },
    async getCartList() {
      if (this.isLogin) {
        const res = await http<cartListType[]>('GET', '/member/cart')
        this.cartList = res.data.result
      }
    },
    async delShopItem(skuId: string) {
      if (this.isLogin) {
        const ids = [] as string[]
        ids.push(skuId)
        await http('DELETE', '/member/cart', { ids })
        this.getCartList()
      }
    },
  },
})

export default useCartStore
