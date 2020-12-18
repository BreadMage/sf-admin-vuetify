import { AUTHKEY } from '@/config.js'
import { login, info } from '@/apis/auth.js'

const state = {
  // 用户信息
  info: {},
  permission: []
}

const mutations = {
  SET_USER_INFO (state, info) {
    state.info = info || {}
  },
  SET_PERMISSION (state, permission) {
    state.permission = permission || []
  }
}

const actions = {
  // 登录
  async handleLogin ({ commit, dispatch }, loginFormData) {
    try {
      const { token } = await login(loginFormData)
      window.localStorage.setItem(AUTHKEY, token)
      await dispatch('handleInfo')
    } catch (error) {
      throw new Error(error)
    }
  },
  async handleInfo ({ commit }) {
    try {
      const { info: data, permission } = await info()
      commit('SET_USER_INFO', data)
      commit('SET_PERMISSION', permission)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
