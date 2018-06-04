
import {RECEIVE_HOME,RECEIVE_NAV,RECEIVE_FENLEI,RECEIVE_SHIWU,RECEIVE_LOGINWAY} from './mutation-types'

export default{
  [RECEIVE_HOME](state,{home}) {
    state.home = home
  },
  [RECEIVE_NAV](state,{nav}){
    state.nav = nav
  },
  [RECEIVE_FENLEI](state,{fenlei}){
    state.fenlei = fenlei
  },
  [RECEIVE_SHIWU](state,{shiwu}){
    state.shiwu = shiwu
  },
  [RECEIVE_LOGINWAY](state,{loginWay}){
    console.log('======',loginWay)
    state.loginWay = loginWay
  }
}

