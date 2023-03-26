// 设置请求头
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
  'Cookie': 'a012bb6b2123984c_gr_session_id=5494e7a1-7b07-48b0-a092-354472f36b42; a012bb6b2123984c_gr_session_id_5494e7a1-7b07-48b0-a092-354472f36b42=true; gr_user_id=3794fce5-1150-47d1-8791-5eb5e9229700; Hm_lpvt_9c85f54259b6f9e8829573471da9274f=1679797290; Hm_lvt_9c85f54259b6f9e8829573471da9274f=1679797255; _rujia-expand_session=c5b17303440d70670f05193fa96498ea'
};

// 发送POST请求
const myRequest = {
  url: 'http://idea.homeinns.com/event/check_in/home',
  method: 'POST',
  headers: headers,
  body: {}
};

$task.fetch(myRequest).then(response => {
  // 解析响应数据
  const result = JSON.parse(response.body);
  if (result.result_code === 0) {
    console.log('自动签到成功');
    $notify('如家酒店', '自动签到成功', result.data.prizes[0].prize_name);
  } else {
    console.log('自动签到失败：' + result.result);
    $notify('如家酒店', '自动签到失败', result.result);
  }
}, reason => {
  console.log('自动签到失败：' + reason.error);
  $notify('如家酒店', '自动签到失败', reason.error);
});
