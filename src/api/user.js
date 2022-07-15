import request from '@/utils/request'

/**
 * 登录
 * @param {String} username 用户名
 * @param {String} password 密码
 * @returns Promise
 */
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: { username, password }
  })
}
