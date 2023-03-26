const url = 'http://idea.homeinns.com/event/check_in/home';

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Homeinns-App-iOS-9.17.2',
  'Content-Length': '0',
  'X-CSRF-Token': '55xT4It9b+u2QZnMEHMsN34fnc65FqbnS2DG5NJJD+aQRaZP1lpMVxX4S6Mav0jEo3GwHRCEb4ozmyyQ1lTuCw==',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
  'Connection': 'keep-alive',
  'Cookie': 'a012bb6b2123984c_gr_session_id=5494e7a1-7b07-48b0-a092-354472f36b42; a012bb6b2123984c_gr_session_id_5494e7a1-7b07-48b0-a092-354472f36b42=true; gr_user_id=3794fce5-1150-47d1-8791-5eb5e9229700; Hm_lpvt_9c85f54259b6f9e8829573471da9274f=1679797290; Hm_lvt_9c85f54259b6f9e8829573471da9274f=1679797255; _rujia-expand_session=c5b17303440d70670f05193fa96498ea',
  'Origin': 'http://idea.homeinns.com',
  'Referer': 'http://idea.homeinns.com/event/check_in/home?client_info=ios&auth_code=2ddfa631c84b526d7b49'
};

const myRequest = {
  url: url,
  method: 'POST',
  headers: headers
};

$task.fetch(myRequest).then(response => {
  const data = JSON.parse(response.body);
  const msg = data.message;
  if (msg.indexOf('签到成功') !== -1) {
    $notify("如家酒店签到", "", "签到成功！");
  } else if (msg.indexOf('今日已签到') !== -
