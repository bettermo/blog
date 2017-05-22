//app.js
let {WeToast} = require('/pages/components/toast/wetoast.js');

App({
  WeToast,
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  uploadFile: function (url, filePath, name, formData, success, fail, complete, sessionTicket) {
    setTimeout(function(){
      success({code: 1, info: '上传成功',data: {url: 'http://pic.wxhand.com/wei_image/8232e26a7b0bcd6cd37a57f6e5972c32.jpg'}});
      //fail({code: 1, info: '上传失败'});
    },500);
  },
})