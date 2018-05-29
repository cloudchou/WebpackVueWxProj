import VueCookie from 'vue-cookie'
import {
  isBlank
} from 'underscore.string'

function getToken() {
  let token = VueCookie.get('XXX_TOKEN') // XXX_TOKEN
  // 平常开发时 如果不用调试微信支付以及微信登录， 可取消下面的注释，然后使用chrome调试，效率会高很多
  // let token = 'XXXX3012D07XXX1BA153B668XXX'
  return token
}

function loginIfNeeded() {
  let token = getToken()
  if (isBlank(token)) {
    login()
    return true
  }
  return false
}

function login() {
  window.location.href = process.env.API_ROOT + '/wechat/auth?redirect_url=' + encodeURIComponent(location.href)
}

export {
  loginIfNeeded,
  getToken,
  login
}
