function init(that, data, prefixName=''){
  var maxNum = data.maxNum?data.maxNum:5;
  var app = getApp();
  that.data.imgUpload = {};
  that.setData({
      [prefixName+'__imgUpload']: {
        title: data.title,
        previewList: data.uploadedList?data.uploadedList:[],
        resList: data.uploadedList?data.uploadedList:[],
        statusList: [],
        maxNum
      }
  });
  /** 获取上传结果,若上传未完毕或失败,返回false */
  that.getUpRult = function(prefix=''){
    let _this = that;
    var statusList = that.data[prefix+'__imgUpload'].statusList;
    for(var i in statusList){
      if (statusList[i]) {
        _this.fnToast('info', '请等待图片上传完毕');
        return false;
      }
    }
    return that.data[prefix+'__imgUpload'].resList;
  };
  that.chooseImage = function(e){
    var _this = that;
    var prefix = e.currentTarget.dataset.prefix;
    var index = _this.data[prefix+'__imgUpload'].previewList.length;

    // 开始选择图片
    wx.chooseImage({
      count: (maxNum-index),
      sizeType: ['compressed'],//['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (files) {
        _this.data[prefix+'__imgUpload'].previewList = _this.data[prefix+'__imgUpload'].previewList.concat(files.tempFilePaths);
        //上传图片结束*/
        for (let i = 0, len = files.tempFilePaths.length; i < len; i++) {
          _this.data[prefix+'__imgUpload'].statusList[i + index] = 1;//将该图片状态设置为上传中1
          (function (upindex) {//闭包开始
            app.uploadFile('/student/upload/uploadImage', files.tempFilePaths[upindex], 'upload_file', {}, function (res) {
              if (res.code == 1) {
                _this.data[prefix+'__imgUpload'].resList[index+upindex] = res.data.url;
                _this.data[prefix+'__imgUpload'].statusList[index+upindex] = null;//标记成功
                _this.setData({
                  [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
                });
              } else {
                _this.data[prefix+'__imgUpload'].statusList[index+upindex] = 2;//标记失败
                _this.data[prefix+'__imgUpload'].resList[index+upindex] = '';
                _this.setData({
                  [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
                });
              }
            }, function(resp){
              _this.data[prefix+'__imgUpload'].statusList[index+upindex] = 2;//标记失败
              _this.data[prefix+'__imgUpload'].resList[index+upindex] = '';
              _this.setData({
                [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
              });
              _this.fnToast('info', '文件上传失败');
            });//上传结束
          })(i);//闭包结束
        }
        _this.setData({
          [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
        });
      }
    })
  };
  /** 上传失败重新上传 */
  that.fnRechooseImg = function(e){
    var _this = that;
    var prefix = e.currentTarget.dataset.prefix;
    var index = e.currentTarget.id;

    // 开始选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],//['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (files) {
        _this.data[prefix+'__imgUpload'].previewList[index] = files.tempFilePaths[0];
        _this.data[prefix+'__imgUpload'].statusList[(index)] = 1;
        //上传图片开始
        app.uploadFile('/student/upload/uploadImage', files.tempFilePaths[0], 'upload_file', {}, function (res) {
          if (res.code == 1) {//上传成功
            let data = res.data;
            _this.data[prefix+'__imgUpload'].resList[index] = data.url;
            _this.data[prefix+'__imgUpload'].statusList[index] = null;//标记成功
            _this.setData({
              [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
            });
          } else {//上传失败
            _this.data[prefix+'__imgUpload'].statusList[index] = 2;//标记失败
            _this.data[prefix+'__imgUpload'].resList[index] = '';
            _this.setData({
              [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
            });
          }

        }, function () {
            _this.data[prefix+'__imgUpload'].statusList[index] = 2;//标记失败
            _this.data[prefix+'__imgUpload'].statusList[index] = 2;//标记失败
            _this.data.resList[index] = '';
            _this.setData({
              [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
            });
            _this.fnToast('info', '文件上传失败');
        });
        //上传图片结束
        _this.setData({
          [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
        });
      }
    })
  };
  /** 点击上传按钮 */
  that.fnDelUpload = function(e){
    let _this = that;
    var prefix = e.currentTarget.dataset.prefix;
    var picIndex = e.currentTarget.id;
    let statusList = _this.data[prefix+'__imgUpload'].statusList;
    for (var i in statusList) {
      if (statusList[i] == 1) {
        _this.fnToast('info', '请等待图片上传完毕');
        return;
      }
    }
    _this.data[prefix+'__imgUpload'].previewList.splice(picIndex, 1);
    _this.data[prefix+'__imgUpload'].statusList.splice(picIndex, 1);
    _this.data[prefix+'__imgUpload'].resList.splice(picIndex, 1);
    _this.setData({
      [prefix+'__imgUpload']: _this.data[prefix+'__imgUpload']
    });
  };
}
module.exports.imgUpload=init;