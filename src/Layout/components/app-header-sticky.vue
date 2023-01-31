<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppHeaderNav from './app-header-nav.vue'
import { useWindowScroll } from '@vueuse/core' // 这个插件是集合了多种api 可以利用里面的某些方法为我们提供方便的开发体验

const { y } = useWindowScroll() // 调用之后解构里面需要的数据  是响应式的
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 ? true : false }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav :top="80" />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 默认情况下完全把自己移动到上面
  transform: translateY(-100%);
  // 完全透明
  opacity: 0;

  // 显示出来的类名
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url('@/assets/images/logo.png') no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
