// 设置请求头信息
const headers = {
  'Connection': 'keep-alive',
  'X-Requested-With': 'XMLHttpRequest',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Origin': 'http://idea.homeinns.com',
  'Content-Length': '0',
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Homeinns-App-iOS-9.17.2',
  'Referer': 'http://idea.homeinns.com/event/check_in/home?client_info=ios&auth_code=2ddfa631c84b526d7b49',
  'Cookie': 'a012bb6b2123984c_gr_session_id=5494e7a1-7b07-48b0-a092-354472f36b42; a012bb6b2123984c_gr_session_id_5494e7a1-7b07-48b0-a092-354472f36b42=true; gr_user_id=3794fce5-1150-47d1-8791-5eb5e9229700; Hm_lpvt_9c85f54259b6f9e8829573471da9274f=1679797290; Hm_lvt_9c85f54259b6f9e8829573471da9274f=1679797255; _rujia-expand_session=c5b17303440d70670f05193fa96498ea',
  'X-CSRF-Token': '55xT4It9b+u2QZnMEHMsN34fnc65FqbnS2DG5NJJD+aQRaZP1lpMVxX4S6Mav0jEo3GwHRCEb4ozmyyQ1lTuCw=='
}

// 发送POST请求
const url = 'http://idea.homeinns.com/event/check_in/home'
const method = 'POST'
const body = {}
const myRequest = {
  url: url,
  method: method,
  headers: headers,
  body: body
}

$task.fetch(myRequest).then(response => {
  const body = response.body
  const result = JSON.parse(body)
  if (result.code === 0) {
    $notify("如家自动签到", "", "签到成功")
  } else {
    $notify("如家自动签到", "", "签到失败，请检查配置信息")
  }
}, reason => {
  $notify("如家自动签到", "", "签到失败，请检查网络连接")
})
