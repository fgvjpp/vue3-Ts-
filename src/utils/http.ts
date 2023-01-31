import { message } from '@/components/XtxUI'
import useStore from '@/store'
import axios, { type Method } from 'axios'
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front.itheima.net/',
  timeout: 10000,
})
instance.interceptors.request.use(
  (req) => {
    const { userInfo } = useStore()
    if (userInfo.profile.token && req.headers) {
      req.headers.Authorization = 'Bearer ' + userInfo.profile.token
    }
    return req
  },
  (err) => {
    return Promise.reject(new Error(err))
  }
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response) {
      message({ type: 'error', text: err.response.data.message, time: 1500 })
    }
    if (err.code === 'ERR_NETWORK') {
      message({ type: 'error', text: '网络错误，请检查网络连接是否正常', time: 1500 })
    }
    return Promise.reject(new Error(err))
  }
)

// 设置后端返回的数据类型
export interface ResponseData<T = any> {
  data: {
    code: string
    msg: string
    result: T
  }
}
// 封装ts类型的axios请求
export const http = <T>(method: Method, url: string, submitData?: unknown) => {
  return instance.request<T, ResponseData<T>>({
    url,
    method,
    // 🔔 自动设置合适的 params/data 键名称，如果 method 为 get 用 params 传请求参数，否则用 data
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData,
  })
}

export default instance
