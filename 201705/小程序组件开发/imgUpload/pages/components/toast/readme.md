# How to use
### description
toast增强插件，图标部分可使用icon或者img，文字部分可设置为多行文字

原生的问题主要在于：
- 图标部分只能使用`success`和`loading`两种图标且不可去除
- 文字部分只能一行，且小程序不支持各种形式的换行

### API
参数说明：
| 参数          | 类型           | 说明 |
| ------------- | ------------- |
| img           | String        | 图标部分使用图片地址，推荐使用base64 |
| imgClassName  | String        | 自定义图片类名 |
| icon          | String        | 图标部分使用的icon，参照小程序icon部分的type |
| iconClassName | String        | 自定义图标类名 |
| titleType     | String        | 文字展现方式，多行文字时设置为`array`，单行文字可不设置 |
| title         | String、Array | 文字部分，多行使用数组，单行使用字符串 |
| duration      | String        | 提示持续时间，默认1500毫秒，设置为0不自动隐藏 |
| success       | Function      | 提示即将隐藏时的回调 |
| fail          | Function      | 调用过程中抛出错误时的回调 |
| complete      | Function      | 调用结束时的回调 |

其他说明：
- 图标部分展示img优先级高于icon，即如果同时传入了img和icon，则展示img
- complete回调函数，无论成功失败都会执行

### 在单个页面中如何使用
```
// page.wxml
<import src="/pages/components/toast/wetoast.wxml"/>
<template is="wetoast" data="{{...__wetoast__}}"/>

// page.js
let app = getApp();

Page({
    onLoad: function() {
        new app.WeToast();
    },
    fnToast: function() {
        this.wetoast.toast({
            icon: 'info',
            title: 'this is info'
        });
    }
})
```