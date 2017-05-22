let {imgUpload} = require('../components/img-upload/img-upload.js');
let app = getApp();
Page({
  data: {
  },
  onLoad(){
    // 初始化wetoast组件
    new app.WeToast();
    //第一个
    imgUpload(this, {
      title: '组件一',
      uploadedList: [
        "http://pic.wxhand.com/wei_image/8232e26a7b0bcd6cd37a57f6e5972c32.jpg"
        ]
      },'first');
    //第二个
    imgUpload(this, {title: '组件二'}, 'second');
  },
  fnToast: function (type, msg, callback) {
    if (callback) {
      this.wetoast.toast({
        icon: type,
        title: msg,
        success: callback
      });
    } else {
      this.wetoast.toast({
        icon: type,
        title: msg
      });
    }
  },
  fnGetUpResult(e){
    console.log(this.getUpRult('first'));
    console.log(this.getUpRult('second'));
  }
});