import Init from './init'
function Install (Vue) {
  Vue.prototype.$message = Init(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Install)
}

export default Install
