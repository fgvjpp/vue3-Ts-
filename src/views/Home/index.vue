<script setup lang="ts">
import useStore from '@/store'
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'

const { home } = useStore()
home.getBannerList()
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
      <!-- 面板组件和 container 版心同级 -->
      <HomeNew />
      <HomeHot />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
