import { createRouter, createWebHashHistory } from 'vue-router'
import useStore from '@/store'
import type { QQUserInfo } from '@/types'
import { message } from '@/components/XtxUI'

const router = createRouter({
  scrollBehavior: () => {
    // 该方法表示切换路由时会直接跳到顶部
    return { top: 0 }
  },
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/Layout/index.vue'),
      children: [
        { path: '/', component: () => import('@/views/Home/index.vue') },
        { path: '/category/:id', component: () => import('@/views/category/index.vue') },
        {
          path: '/goods/:id',
          component: () => import('@/views/Goods/index.vue'),
        },
        {
          path: '/cart',
          component: () => import('@/views/Cart/index.vue'),
        },
        {
          path: '/checkout',
          component: () => import('@/views/Checkout/index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/login/callback',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/test',
      component: () => import('@/views/Test/index.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login/callback') {
    const { userInfo } = useStore()
    if (QC.Login.check()) {
      QC.Login.getMe(async (openId) => {
        userInfo.unionId = openId
        try {
          await new Promise((resolve) => {
            // 将数据存到store里
            QC.api('get_user_info').success((res: QQUserInfo) => {
              userInfo.userQQInfo = res.data
              resolve(res)
            })
          })
          // 校验qq账号是否绑定
          await userInfo.LoginQQ({
            unionId: openId,
            source: 6,
          })
        } catch (error) {
          console.log(error)
        }
        next()
      })
    } else {
      message({ type: 'error', text: '还未登录', time: 1000 })
      next('/login')
    }
  } else {
    next()
  }
})

export default router
