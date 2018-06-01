import {RECEIVE_HOME,RECEIVE_NAV,RECEIVE_FENLEI,RECEIVE_SHIWU} from './mutation-types'
import {reqHome,reqNav,reqFenlei,reqShiwu} from '../api'
// 异步获取
export default {
  async getHome({commit},callback) {
    const result = await reqHome()
    const home = result.home
    commit(RECEIVE_HOME, {home})
    callback && callback()
  },

  async getNav({commit}) {
    const result = await reqNav()
    const nav = result.nav
    commit(RECEIVE_NAV, {nav})
  },

  async getFenlei({commit}){
    const result = await reqFenlei()
    const fenlei = result.fenlei
    commit(RECEIVE_FENLEI,{fenlei})
  },

  async getShiwu ({commit},callback){
    const result = await reqShiwu()
    const shiwu = result.shiwu
    commit(RECEIVE_SHIWU,{shiwu})
    callback && callback()
  }
}


