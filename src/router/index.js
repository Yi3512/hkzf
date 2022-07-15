import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/oneroute/my'
  },
  {
    path: '/oneroute',
    component: () => import('@/views/Oneroute'),
    children: [
      {
        path: 'my',
        name: 'my', // 我的
        component: () => import('@/views/Oneroute/My')
      },
      {
        path: 'home',
        name: 'home', // 首页
        component: () => import('@/views/Oneroute/Home')
      },
      {
        path: 'look',
        name: 'look', // 看房
        component: () => import('@/views/Oneroute/LookRomm')
      },
      {
        path: 'tidings',
        name: 'tidings', // 资讯
        component: () => import('@/views/Oneroute/Tidings')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
