import Mock from 'mockjs'
import apiData from './datahome.json'

Mock.mock('/home', {code:0, home:apiData})
