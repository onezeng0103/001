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
      path: '/finance',
      name: 'finance',
      component: () => import('../views/finance/index.vue')
    },
    {
      path: '/finance/subscribe/:id',
      name: 'subscribe',
      component: () => import('../views/subscribe/index.vue')
    },
    {
      path: '/withdrawDeposit',
      name: 'withdrawDeposit',
      component: () => import('../views/withdrawDeposit/index.vue')
    },
    {
      path: '/emailAuthentication',
      name: 'emailAuthentication',
      component: () => import('../views/emailAuthentication/index.vue')
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: () => import('../views/changePassword/index.vue')
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
    },
    {
      path: '/flashExchange',
      name: 'flashExchange',
      component: () => import('../views/flashExchange/index.vue')
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import('../views/exchange/index.vue')
    },
    {
      path: '/proxy',
      name: 'proxy',
      component: () => import('../views/proxy/index.vue')
    },
    {
      path: '/proxy/records',
      name: 'proxyRecords',
      component: () => import('../views/proxy/records.vue')
    },
    {
      path: '/proxy/earnings',
      name: 'proxyEarnings',
      component: () => import('../views/proxy/earnings.vue')
    },
    {
      path: '/trade',
      name: 'trade',
      component: () => import('../views/trade/index.vue')
    },
    {
      path: '/contract',
      name: 'contract',
      component: () => import('../views/contract/index.vue')
    },
    {
      path: '/flash',
      name: 'flash',
      component: () => import('../views/flash/index.vue')
    },
    {
      path: '/flashOption',
      name: 'flashOption',
      component: () => import('../views/flashOption/index.vue')
    },
    {
      path: '/userauth',
      name: 'userAuth',
      component: () => import('../views/userauth/index.vue')
    },
    {
      path: '/langList',
      name: 'langList',
      component: () => import('../views/langList/index.vue')
    },
    {
      path: '/invaite',
      name: 'invaite',
      component: () => import('../views/invaite/index.vue')
    },
    {
      path: '/fund-password',
      name: 'fundPassword',
      component: () => import('../views/fund-password/index.vue')
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: () => import('../views/recharge/index.vue')
    },
    {
      path: '/recharge/method',
      name: 'rechargeMethod',
      component: () => import('../views/recharge/method.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/help/index.vue')
    },
    {
      path: '/helpDetail/:id',
      name: 'helpDetail',
      component: () => import('../views/help/helpDetail.vue')
    },
    {
      path: '/termService',
      name: 'termService',
      component: () => import('../views/termService/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/index.vue')
    },
    {
      path: '/floworder',
      name: 'floworder',
      component: () => import('../views/floworder/index.vue')
    },
    {
      path: '/floworder/confirm/:id',
      name: 'floworderConfirm',
      component: () => import('../views/floworder/confirm.vue')
    },
    {
      path: '/floworder/mine',
      name: 'floworderMine',
      component: () => import('../views/floworder/mine.vue')
    },
    {
      path: '/floworder/apply',
      name: 'floworderApply',
      component: () => import('../views/floworder/apply.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/index.vue')
    },
    {
      path: '/cashflow',
      name: 'cashflow',
      component: () => import('../views/cashflow/index.vue')
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
