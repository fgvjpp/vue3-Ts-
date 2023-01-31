<script setup lang="ts">
import type { categoryTypeChildren } from '@/types'

defineProps<{
  goodsData?: categoryTypeChildren[]
  isShow?: boolean
  top?: number
}>()
</script>
<template>
  <div :class="{ show: isShow }" :style="{ top: top + 'px' }" class="GoodsContent">
    <ul>
      <li v-for="item in goodsData" :key="item.id">
        <router-link to="/">
          <img :src="item.picture" alt="" />
          <p>{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.GoodsContent {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 0;
  background-color: #fff;
  z-index: 9999;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #b6b6b6;
  transition: all 0.2s;
  &.show {
    height: 160px;
  }
  ul {
    display: flex;
    li {
      text-align: center;
      width: 160px;
      height: 160px;

      img {
        width: 100px;
        height: 100px;
      }
      p {
        width: 100%;
        line-height: 40px;
      }
    }
  }
}
</style>
