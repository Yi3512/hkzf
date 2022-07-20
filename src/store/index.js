import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: getToken() || '',
    // 把城市列表的数据存入本地
    hkzf_city: JSON.parse(localStorage.getItem('hkzf_city')) || {
      label: '北京',
      pinyin: 'beijing',
      short: 'bj',
      value: 'AREA|88cff55c-aaa4-e2e0'
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      setToken(payload)
    },
    // 添加当前城市
    addCity (state, val) {
      state.hkzf_city = val
      localStorage.setItem('hkzf_city', JSON.stringify(val) || null)
    }
  }
})
