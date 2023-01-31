import type { categoryType } from '@/types'
import { http } from '@/utils/http'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCategories = defineStore({
  id: 'category',
  state: () => ({
    status: ref(false),
    categoryList: {} as categoryType,
    topNavList: {} as categoryType,
  }),
  getters: {},
  actions: {
    async getcategory(id: string) {
      const res = await http<categoryType>('GET', '/category', { id })
      this.categoryList = res.data.result
    },
    async getTopNavList(id: string) {
      const res = await http<categoryType>('GET', '/category', { id })
      this.topNavList = res.data.result
    },
  },
})

export default useCategories
