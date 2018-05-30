import {RECEIVE_HOME} from './mutation-types'
import {reqHome} from '../api'
// 异步获取
export default {
  async getHome({commit}) {
    const result = await reqHome()
      const home = result.home
      commit(RECEIVE_HOME, {home})
  }
}


