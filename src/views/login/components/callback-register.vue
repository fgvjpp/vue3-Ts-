<script setup lang="ts">
import useStore from '@/store'
import { reactive, ref, watch } from 'vue'
import { message } from '@/components/XtxUI'
import { useInterval } from '@/hooks/index'
const { userInfo } = useStore()
const codeTime = ref(5)
const { countTime, resume } = useInterval(codeTime)
const isShowCode = ref(true)

const verify = () => {
  if (!/^1[3-9]\d{9}$/.test(form.mobile)) {
    message({ type: 'warn', text: '手机号码格式错误~' })
    return false
  }
  return true
}

const submitRegister = () => {
  userInfo.register(form)
}
const sendCode = () => {
  if (!verify()) return
  userInfo.getRegisterCode(form.mobile)
  codeTime.value = 5
  isShowCode.value = false
  resume()
}
watch(countTime, () => {
  if (countTime.value <= 0) {
    isShowCode.value = true
  }
})
const form = reactive({
  account: '',
  mobile: '',
  code: '',
  password: '',
  unionId: userInfo.unionId,
})
</script>

<template>
  <div class="xtx-form">
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-user"></i>
        <input class="input" v-model.trim="form.account" type="text" placeholder="请输入用户名" />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input class="input" v-model.trim="form.mobile" type="text" placeholder="请输入手机号" />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input class="input" type="text" v-model.trim="form.code" placeholder="请输入验证码" />
        <span v-if="isShowCode" @click="sendCode" class="code">发送验证码</span>
        <span class="code" v-else>{{ countTime }}秒后重试</span>
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input class="input" v-model.trim="form.password" type="password" placeholder="请输入密码" />
      </div>
      <div class="error"></div>
    </div>
    <!-- <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input class="input" type="password" placeholder="请确认密码" />
      </div>
      <div class="error"></div>
    </div> -->
    <a href="javascript:;" @click="submitRegister" class="submit">立即提交</a>
  </div>
</template>

<style scoped lang="less">
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
