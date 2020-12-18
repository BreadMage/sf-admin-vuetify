import request from '@/utils/request'

// 登录接口
export function login (data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

// 用户信息获取接口
export function info (params) {
  return request({
    url: '/auth/info',
    method: 'get',
    params
  })
}
