/*
 * 获取商家信息
 */
import ajax from './ajax'
export const reqHome = () => ajax('/home')
export const reqNav = () => ajax('/nav')
export const reqFenlei =() => ajax('/fenlei')
export const reqShiwu =() => ajax('/shiwu')

