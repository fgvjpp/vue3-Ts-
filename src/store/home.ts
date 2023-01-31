import { defineStore } from 'pinia'
import { http } from '@/utils/http'
import type { bannerListType, categoryListType, newGoodsListType, hotGoodsList } from '@/types/index'
const useHomeStore = defineStore({
  id: 'Home',
  persist: {
    key: 'home',

    paths: ['categoryList'],
  },
  state: () => ({
    categoryList: [] as categoryListType[],
    bannerList: [] as bannerListType[],
    newGoodsList: [] as newGoodsListType[],
    hotGoodsList: [] as hotGoodsList[],
  }),
  getters: {},
  actions: {
    async getAllCategory() {
      const res = await http<categoryListType[]>('GET', '/home/category/head')
      this.categoryList = res.data.result
    },
    async getBannerList() {
      const res = await http<bannerListType[]>('GET', '/home/banner')
      console.log(res) // 刚开始先拿数据确定类型 然后设置好类型赋值

      this.bannerList = res.data.result
    },
    async getNewGoodsList() {
      const res = await http<newGoodsListType[]>('GET', '/home/new')
      this.newGoodsList = res.data.result
    },
    async getHotGoodsList() {
      const res = await http<hotGoodsList[]>('GET', '/home/hot')
      this.hotGoodsList = res.data.result
    },
  },
})
export default useHomeStore
