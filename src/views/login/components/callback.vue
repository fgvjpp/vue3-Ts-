<script setup lang="ts">
import { reactive } from 'vue'
import callbackBind from './callback-bind.vue'
import callbackRegister from './callback-register.vue'
import useStore from '@/store'
const { userInfo } = useStore()

const isOk = reactive({
  bind: true,
  register: false,
})
type isOkType = keyof typeof isOk
function selectTab(data: isOkType) {
  let key: isOkType
  for (key in isOk) {
    isOk[key] = false
  }
  isOk[data] = true
}
</script>
<template>
  <section class="container">
    <nav class="tab">
      <a href="javascript:;" @click="selectTab('bind')" :class="{ active: isOk.bind }">
        <i class="iconfont icon-bind" />
        <span>已有小兔鲜账号，请绑定手机</span>
      </a>
      <a href="javascript:;" @click="selectTab('register')" :class="{ active: isOk.register }">
        <i class="iconfont icon-edit" />
        <span>没有小兔鲜账号，请完善资料</span>
      </a>
    </nav>
    <div class="tab-content">
      <callbackBind :unionId="userInfo.unionId" :QQuserInfo="userInfo.userQQInfo" v-show="isOk.bind"></callbackBind>
      <callbackRegister :unionId="userInfo.unionId" :QQuserInfo="userInfo.userQQInfo" v-show="isOk.register"></callbackRegister>
    </div>
  </section>
</template>

<style scoped lang="less">
.container {
  padding: 25px 0;
}
.tab {
  background: #fff;
  height: 80px;
  padding-top: 40px;
  font-size: 18px;
  text-align: center;
  a {
    color: #666;
    display: inline-block;
    width: 350px;
    line-height: 40px;
    border-bottom: 2px solid #e4e4e4;
    i {
      font-size: 22px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: 4px;
    }
    &.active {
      color: @xtxColor;
      border-color: @xtxColor;
    }
  }
}
.tab-content {
  min-height: 600px;
  background: #fff;
}
</style>
