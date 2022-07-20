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
    path: '/login', // 登录
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/collect',
    name: 'collect', // 我的收藏
    component: () => import('@/views/Oneroute/My/Collect')
  },
  {
    path: '/rent',
    name: 'rent', // 我的出租
    component: () => import('@/views/Oneroute/My/Rent')
  },
  {
    path: '/house',
    name: 'house', // 房屋详情
    component: () => import('@/views/House')
  },
  {
    path: '/citylist', // 城市列表
    name: 'citylist',
    component: () => import('@/views/CityList')
  }
]

const router = new VueRouter({
  routes
})

export default router
