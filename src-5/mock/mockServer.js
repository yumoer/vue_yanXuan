import Mock from 'mockjs'
import apiHome from './datahome'
import apiNav from './data'
import apiFenlei from './fenlei_data.json'
import apiShiwu from './datashiwu'

Mock.mock('/home', {code:0, home:apiHome})
Mock.mock('/nav',{code:0,nav:apiNav})
Mock.mock('/fenlei',{code:0,fenlei:apiFenlei})
Mock.mock('/shiwu',{code:0,shiwu:apiShiwu})
