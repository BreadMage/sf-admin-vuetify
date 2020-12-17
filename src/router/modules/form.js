import BaiscLayout from '@/layouts/index/index.vue'
export default {
  path: '/form',
  name: 'form',
  redirect: '/form/base-form',
  component: BaiscLayout,
  meta: { title: '表单页', icon: 'mdi-square-edit-outline' },
  children: [
    {
      path: 'base-form',
      name: 'form-base-form',
      component: () => import('@/views/form/base-form/index.vue'),
      meta: { title: '基础表单' }
    },
    {
      path: 'step-form',
      name: 'form-step-form',
      component: () => import('@/views/form/step-form/index.vue'),
      meta: { title: '分布表单' }
    },
    {
      path: 'advanced-form',
      name: 'form-advanced-form',
      component: () => import('@/views/form/advanced-form/index.vue'),
      meta: { title: '高级表单' }
    }
  ]
}
