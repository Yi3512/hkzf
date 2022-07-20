// 城市
import request from '@/utils/request'
// 获取城市列表数据
export const getCity = (level) => {
  return request({
    url: '/area/city',
    params: {
      level: 1
    }
  })
}

// 获取热门城市列表
export const hotCity = () => {
  return request({
    method: 'GET',
    url: '/area/hot'
  })
}
