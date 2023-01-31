<script setup lang="ts">
import { message } from '@/components/XtxUI'
import { useInterval } from '@/hooks/index'
import { reactive, ref, watch } from 'vue'
import useStore from '@/store'
const { userInfo } = useStore()
const isShowCode = ref(true)
const codeTime = ref(5)
const { countTime, resume } = useInterval(codeTime)
const form = reactive({
  mobile: '13535337057',
  code: '',
  unionId: userInfo.unionId,
})
const verify = () => {
  if (!/^1[3-9]\d{9}$/.test(form.mobile)) {
    message({ type: 'warn', text: '手机号码格式错误~' })
    return false
  }
  return true
}
const sendCode = () => {
  if (!verify()) return
  userInfo.getUserCode(form.mobile)
  codeTime.value = 5
  isShowCode.value = false
  resume()
}
const bindQQ = () => {
  userInfo.bindLoignQQ(form)
}
watch(countTime, () => {
  if (countTime.value <= 0) {
    isShowCode.value = true
  }
})
</script>

<template>
  <div class="xtx-form">
    <div class="user-info">
      <img :src="userInfo.userQQInfo.figureurl_2" alt="" />
      <p>Hi，{{ userInfo.userQQInfo.nickname }}欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~</p>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input v-model.trim="form.mobile" @blur="verify" class="input" type="text" placeholder="绑定的手机号" />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input v-model.trim="form.code" class="input" type="text" placeholder="短信验证码" />
        <span v-if="isShowCode" @click="sendCode" class="code">发送验证码</span>
        <span class="code" v-else>{{ countTime }}秒后重试</span>
      </div>
      <div class="error"></div>
    </div>
    <a href="javascript:;" @click="bindQQ" class="submit">立即绑定</a>
  </div>
</template>

<style scoped lang="less">
.user-info {
  width: 320px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  background: #f2f2f2;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 25px;
  img {
    background: #f2f2f2;
    width: 50px;
    height: 50px;
  }
  p {
    padding-left: 10px;
  }
}
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 80px;
  color: #999;
  &:hover {
    cursor: pointer;
  }
}
</style>
