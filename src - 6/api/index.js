/*
 * 获取商家信息
 */
import ajax from './ajax'
export const reqHome = () => ajax('/home')
export const reqNav = () => ajax('/nav')
export const reqFenlei =() => ajax('/fenlei')
export const reqShiwu =() => ajax('/shiwu')
export const reqloginWay =() => ajax('/loginway')

// 获取图片验证码
export const reqCaptcha = () => ajax('/api/captcha')
// 账号密码登录
export const accountLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd/',{name, pwd, captcha},"POST")
// 获取短信验证码
export const mobileCode = (phone) => ajax('/api/sendcode', {phone})
// 手机号验证码登录
export const phoneLogin = ({phone, code}) => ajax('/api/login_sms/', {phone, code},"POST")

