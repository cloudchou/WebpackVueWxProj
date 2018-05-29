import WeixinJSSDK from 'weixin-js-sdk'
import {
  axios
} from './AxiosUtils'
import objectAssign from 'object-assign'

function configWechatJsSdk(shareOptions) {
  setWechatConfigCallback(shareOptions)
  let currentUrl = location.href.split('#')[0]
  let api = `/misc/wechat_js_config`
  axios.post(api, {
    currentUrl: currentUrl
  }).then((res) => {
    let data = res.data
    // console.log(res.data)
    WeixinJSSDK.config({
      // {"signature":"744a6780bc4d956246ca1fb98c9b3d4c78616104","appid":"wxa584b91915a4998e","nonceStr":"BMUEqHMigXPun2uK","timestamp":1517661110}
      // debug: false,
      // appId: 'wxa584b91915a4998e',
      // timestamp: '1517661110', // 必填，生成签名的时间戳
      // nonceStr: 'BMUEqHMigXPun2uK', // 必填，生成签名的随机串
      // signature: '744a6780bc4d956246ca1fb98c9b3d4c78616104', // 必填，签名，见附录1
      debug: false,
      appId: data.appid,
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名，见附录1
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
  })
}

function setWechatConfigCallback(shareOptions) {
  let ops = {
    title: 'default title',
    link: location.href,
    imgUrl: 'http://xxx.com/xxx.png',
    desc: 'desc',
    success: function () {
      console.log('share success')
    },
    cancel: function () {
      console.log('share failure')
    }
  }
  objectAssign(ops, shareOptions)
  WeixinJSSDK.ready(() => {
    console.log('wechat config ready')
    WeixinJSSDK.onMenuShareTimeline(ops)
    WeixinJSSDK.onMenuShareAppMessage(ops)
  })
  WeixinJSSDK.error(function (res) {
    console.log('wechat config error')
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    console.log(`error : ${JSON.stringify(res)}`)
  })
}

export {
  configWechatJsSdk
}
