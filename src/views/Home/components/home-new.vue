<script setup lang="ts">
import useStore from '@/store'
import HomePanel from './home-panel.vue'
import { ref } from 'vue'
import { useObserver } from '@/hooks'
const { home } = useStore()
const goodsList = ref(null)
useObserver(goodsList, home.getNewGoodsList)
</script>

<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore path="/" />
      </template>
      <!-- 面板内容 -->
      <ul ref="goodsList" class="goods-list">
        <template v-if="home.newGoodsList.length > 0">
          <li v-for="item in home.newGoodsList" :key="item.id">
            <RouterLink :to="`/goods/${item.id}`">
              <img :src="item.picture" alt="" />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </template>
        <template v-else>
          <li v-for="i in 4" :key="i">
            <RouterLink to="/">
              <XtxSkeleton :height="306" :width="306" />
              <p class="name ellipsis"><XtxSkeleton :width="240" :height="30" /></p>
              <p class="price">&yen; <XtxSkeleton :height="30" /></p>
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
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }

    .price {
      color: @priceColor;
    }
  }
}
</style>
