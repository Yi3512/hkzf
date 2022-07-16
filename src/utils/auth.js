import storeage from './storage'

const TOKEN_KEY = 'HAOKEI_ZUFAN_TOKEN'

export const getToken = () => storeage.get(TOKEN_KEY)

export const setToken = (token) => storeage.set(TOKEN_KEY, token)

export const removeToken = () => storeage.remove(TOKEN_KEY)
