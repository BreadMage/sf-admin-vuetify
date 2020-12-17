import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由模块
import routeModules from './modules'

Vue.use(VueRouter)

const routes = [
  ...routeModules,
  {
    path: '*',
    redirect: '/dashboard/analysis'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
