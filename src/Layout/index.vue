<script setup lang="ts">
import AppTopnav from './components/app-topnav.vue'
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'
import AppHeaderSticky from './components/app-header-sticky.vue'
import { ref, watch } from 'vue'
import router from '@/router'
const routerList = ref<string[]>([])
watch(
  () => router.currentRoute.value.path,
  (newValue) => {
    routerList.value = newValue.split('/').slice(1)
  },
  { immediate: true }
)
</script>
<template>
  <AppTopnav />
  <AppHeader />
  <AppHeaderSticky />
  <div class="content">
    <main class="app-body">
      <XtxBread>
        <XtxBreadItem :to="'/'">首页</XtxBreadItem>
        <template v-if="routerList.length > 1">
          <XtxBreadItem v-for="item in routerList" :key="item">{{ item }}</XtxBreadItem>
        </template>
      </XtxBread>
      <router-view :key="$route.fullPath"></router-view>
    </main>
  </div>
  <AppFooter />
</template>
<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  .app-body {
    width: 1240px;
  }
}
</style>
