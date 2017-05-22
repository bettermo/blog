多图片上传组件(依赖wetoast,需要引入)

1.引入
wxss:
@import "../components/img-upload/img-upload.wxss";

wxml:
<import src="/pages/components/img-upload/img-upload"/>
<--使用时,需要接入wx:if,数据为[prefix]_imgUpload,只引入一个prefix可为空,如下,prefix为'first'-->
<template wx:if="{{first__imgUpload}}" is="imgupload" data="{{...first__imgUpload,prefix: 'first'}}"/>

js
let {imgUpload} = require('../components/img-upload/img-upload.js');

//在onload中初始化
onLoad(){
    // 初始化wetoast组件
    new app.WeToast();
    //第一个
    imgUpload(this, {
      title: '哈哈哈',//标题
      uploadedList: [],//已上传的urlList,可选
    }, 'first');
    //第二个,需要在wxml中引入时添加对应prefix
    imgUpload(this, {title: '唉吆喂'}, 'second');
}

2.方法:
初始化
imgUpload(that, data, prefixName=''){...};
that: 当前页面的this对象,Object
data: 初始化数据,Object(maxNum: Number最大上传数, uploadedList: Array已保存图片URL数组)
prefixName: 需要引入多个组件时需要对每个添加前缀区分,默认为空