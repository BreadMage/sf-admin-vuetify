export default {
  path: '/auth',
  name: 'auth',
  redirect: '/auth/login',
  component: () => import('@/views/auth/login/index'),
  meta: { title: '认证' },
  hidden: true
}
