/*包含n个间接更新状态方法的对象*/
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-type'
import {reqAddress,reqFoodCategorys,reqShops} from '../api'

export default {
  //异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  //异步获取食品分类列表
  async getCategorys({commit}){
    //发送异步ajax请求
    const result = await reqFoodCategorys()
    //根据结果提交一个mutation
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //发送异步ajax请求
    const {latitude,longitude} = state
    const result = await reqShops(latitude,longitude)
    //根据结果提交一个mutation
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  /*// 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  }*/

}
