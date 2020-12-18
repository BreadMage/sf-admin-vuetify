import EmptyLayout from '@/layouts/empty/index.vue'
export default {
  path: '/auth',
  name: 'auth',
  redirect: '/auth/login',
  component: EmptyLayout,
  children: [
    {
      path: 'login',
      name: 'auth-login',
      component: () => import('@/views/auth/login')
    }
  ],
  meta: { title: '认证' },
  hidden: true
}
