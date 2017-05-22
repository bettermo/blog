var express = require('express');
var router = express.Router();
var articleDao = require('../dao/ArticleDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource where i');
});
router.post('/dot', function(req, res, next) {
    res.json({
        code: 1,
        info: 'chenggong',
        data: {
            is_remind: 1
        }
    });
});
router.post('/json', function(req, res, next) {
  var data = {
    code: 1,
    info: '获取数据成功',
    data: {
        list: [{
            id: 1,
            name: '支付宝软件下载',
            type: 'app下载',
            startTime: '2015.3.1 00:30',
            endTime: '2015.3.3 00:30',
            price: '1.4 / 100 / 140.00',
            order: '27 / 100 / 100',
            status: 0
        },{
            id: 2,
            name: '支付宝软件下载',
            type: 'app下载',
            startTime: '2015.3.1 00:30',
            endTime: '2015.3.3 00:30',
            price: '1.4 / 100 / 140.00',
            order: '27 / 100 / 100',
            status: 1
        },{
            id: 3,
            name: '支付宝软件下载',
            type: 'app下载',
            startTime: '2015.3.1 00:30',
            endTime: '2015.3.3 00:30',
            price: '1.4 / 100 / 140.00',
            order: '27 / 100 / 100',
            status: 2
        },{
            id: 3,
            name: '支付宝软件下载',
            type: 'app下载',
            startTime: '2015.3.1 00:30',
            endTime: '2015.3.3 00:30',
            price: '1.4 / 100 / 140.00',
            order: '27 / 100 / 100',
            status: 2
        },{
            id: 3,
            name: '支付宝软件下载',
            type: 'app下载',
            startTime: '2015.3.1 00:30',
            endTime: '2015.3.3 00:30',
            price: '1.4 / 100 / 140.00',
            order: '27 / 100 / 100',
            status: 2
        },{
            id: 3,
            name: '支付宝软件下载',
            type: 'app下载',
            startTime: '2015.3.1 00:30',
            endTime: '2015.3.3 00:30',
            price: '1.4 / 100 / 140.00',
            order: '27 / 100 / 100',
            status: 2
        },{
            id: 3,
            name: '支付宝软件下载',
            type: 'app下载',
            startTime: '2015.3.1 00:30',
            endTime: '2015.3.3 00:30',
            price: '1.4 / 100 / 140.00',
            order: '27 / 100 / 100',
            status: 2
        },{
            id: 3,
            name: '支付宝软件下载',
            type: 'app下载',
            startTime: '2015.3.1 00:30',
            endTime: '2015.3.3 00:30',
            price: '1.4 / 100 / 140.00',
            order: '27 / 100 / 100',
            status: 2
        }],
        page: 5,
        total: 80
    }
  };
  res.json(data);
});

module.exports = router;
