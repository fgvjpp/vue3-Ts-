<script setup lang="ts">
import useStore from '@/store'
import { ref } from 'vue'
import { useObserver } from '@/hooks'
import HomePanel from './home-panel.vue'
const { home } = useStore()
const goodsList = ref(null)
useObserver(goodsList, home.getHotGoodsList)
</script>

<template>
  <div class="home-hot">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <ul ref="goodsList" class="goods-list">
        <template v-if="home.hotGoodsList.length > 0">
          <li v-for="item in home.hotGoodsList" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name">{{ item.title }}</p>
              <p class="desc">{{ item.alt }}</p>
            </RouterLink>
          </li>
        </template>
        <template v-else>
          <li v-for="i in 4" :key="i">
            <RouterLink to="/">
              <XtxSkeleton :height="306" :width="306" bg="rgba(0, 0, 0, 0.1)" />
              <p class="name"><XtxSkeleton :width="240" :height="30" bg="rgba(0, 0, 0, 0.1)" /></p>
              <p class="desc">&yen; <XtxSkeleton :height="30" bg="rgba(0, 0, 0, 0.1)" /></p>
            </RouterLink>
          </li>
        </template>
      </ul>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
