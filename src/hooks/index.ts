// hooks和utils区别
// 需要用到组合API的都叫hooks  比如只能在setup中使用就叫hooks
// 有通用性的就叫utils  工具可以在任意文件都可以使用
import { useIntersectionObserver, useIntervalFn, type MaybeElement, type MaybeElementRef } from '@vueuse/core'
import { ref, type Ref } from 'vue'

export const useObserver = (doms: MaybeElementRef<MaybeElement>, apiFn: () => void) => {
  const { stop } = useIntersectionObserver(doms, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      apiFn()
      stop()
    }
  })
}

export const useInterval = (time: number | Ref<number>) => {
  const countTime = ref(time)
  const { pause, resume } = useIntervalFn(
    () => {
      countTime.value--
      if (countTime.value <= 0) {
        pause()
      }
    },
    1000,
    { immediate: false }
  )
  return { countTime, pause, resume }
}
