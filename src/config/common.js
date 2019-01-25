export default {};

// 判断环境
export const osJudge = () => {
  // 设备
  let device = '';
  // 渠道
  let channel = '';
  let ua = navigator.userAgent;

  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  let playbook = ua.match(/PlayBook/);
  let android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let firefox = ua.match(/Firefox\/([\d.]+)/);
  let ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/);
  let ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  let iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
  let webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
  let blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
  let bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
  let chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);

  let tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
    (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)));
  let phone  = !!(!tablet && !ipod && (android || iphone || webos || blackberry || bb10 ||
    (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
    (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))));

  let ios = iphone || ipad || ipod;

  let uaLower = ua.toLowerCase();

  if (uaLower.indexOf('jdapp') != -1) {
    channel = 'app';
  }
  if (uaLower.match(/MicroMessenger/i) == 'micromessenger') {
    channel = 'weixin';
  }
  if (uaLower.indexOf('iphone') != -1) {
    device = 'iphone';
  } else if (uaLower.indexOf('android') != -1) {
    device = 'android';
  } else if (uaLower.indexOf('ipad') != -1) {
    device = 'ipad';
  }
  let osArr = [channel, device, phone, ios];
  return osArr;
}
