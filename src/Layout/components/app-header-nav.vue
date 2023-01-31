<script setup lang="ts">
import { RouterLink } from 'vue-router'
import useStore from '@/store'
import topNav from '@/views/category/components/top-nav.vue'
import { ref, watchEffect } from 'vue'

const { home, category } = useStore()

home.getAllCategory()
const isShow = ref<boolean | undefined>(false)

let Time: number
let Time2: number
function mouseenter(id: string) {
  Time = setTimeout(() => {
    isShow.value = true
    category.getTopNavList(id)
  }, 150)
}
function mouseleave() {
  clearTimeout(Time)
  Time2 = setTimeout(() => {
    isShow.value = false
  }, 150)
}
function mouseenterTopNav() {
  clearTimeout(Time2)
}
function mouseleaveTopNav() {
  isShow.value = false
}
watchEffect(() => {
  isShow.value = props.flag
})
const props = defineProps<{
  top?: number
  flag?: boolean | undefined
}>()
</script>

<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li @mouseleave="mouseleave" @mouseenter="mouseenter(item.id)" @click="isShow = false" v-for="item in home.categoryList" :key="item.id">
      <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
    </li>
  </ul>
  <topNav :top="top" @mouseleave="mouseleaveTopNav" @mouseenter="mouseenterTopNav" :isShow="isShow" :goods-data="category.topNavList.children" />
</template>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &.router-link-exact-active {
        color: green;
      }
    }
  }
}
</style>
