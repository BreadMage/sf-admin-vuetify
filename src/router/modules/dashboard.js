import BaiscLayout from '@/layouts/index/index.vue'
export default {
  path: '/dashboard',
  name: 'dashboard',
  redirect: '/dashboard/analysis',
  component: BaiscLayout,
  meta: { title: '仪表盘', icon: 'mdi-view-dashboard' },
  children: [
    {
      path: 'analysis',
      name: 'dashboard-analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: { title: '分析页' }
    },
    {
      path: 'workplace',
      name: 'dashboard-workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: { title: '监控页' }
    }
  ]
}
