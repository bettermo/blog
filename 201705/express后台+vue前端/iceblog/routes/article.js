var express = require('express');
var router = express.Router();
var articleDao = require('../dao/ArticleDao');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource where i');
});
router.get('/getArticles', function (req, res, next) {
    var result = articleDao.getArticles(function (result) {
        res.json({ code: 0, info: '成功', data: result });
    }, function (err) {
        res.json({ code: 1, info: err, data: '' });
    });
});
router.get('/getArticles2', function (req, res, next) {
    var result = articleDao.getArticles2().then(result =>{
        res.json({ code: 0, info: '成功', data: result });
    }).catch(err=>{
        res.json({ code: 1, info: err, data: '' });
    });
});

module.exports = router;
