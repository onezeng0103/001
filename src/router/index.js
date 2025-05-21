import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/store/user/index'
import { signUp } from '@/api/user'
import { dispatchCustomEvent } from '@/utils'
import { noLoginRouterList } from './whiteList'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/lr',
      name: 'lr',
      component: () => import('../views/lr/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('../views/forget/index.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/message/index.vue')
    },
    {
      path: '/message/detail',
      name: 'messageDetail',
      component: () => import('../views/message/detail.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/store/index.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/wallet/index.vue')
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  if (userStore.isSign) {
    // 已登录
    await userStore.getUserInfo()
    const auditStatusAdvanced = userStore.userInfo.detail?.auditStatusAdvanced
    const address = userStore.userInfo.withdrawAddress?.address
    const userTardPwd = userStore.userInfo.detail?.userTardPwd
    // 检查用户是否需要初始化
    const needInitialize =
      !userTardPwd ||
      auditStatusAdvanced == null ||
      auditStatusAdvanced == 2 ||
      auditStatusAdvanced == undefined ||
      address == '' ||
      address == undefined
    // needInitialize
    if (false) {
      // 如果需要初始化且不在初始化页面，则重定向到初始化页面
      if (to.path === '/initialize') {
        next()
      } else {
        next({ path: '/initialize', replace: true })
      }
    } else {
      // 用户信息完整，正常导航
      if (to.path.indexOf('/i&') > -1 || to.path === '/initialize') {
        next({ path: '/', replace: true })
      } else {
        next()
      }
    }
  } else {
    if (!noLoginRouterList.includes(to.path)) {
      next('/lr')
    } else {
      next()
    }

    try {
      const singUpRes = await signUp(params)
      if (singUpRes.code == 200 && singUpRes.data.satoken) {
        // 登录成功
        dispatchCustomEvent('event_toastChange', { name: 'login_success' })
        let token = singUpRes.data.satoken
        userStore.setIsSign(true)
        userStore.setToken(token)
        userStore.getUserInfo()
        next('/')
      } else {
        showToast(singUpRes.msg)
      }
      next()
    } catch (error) {
      next()
    }
  }
})
export default router
