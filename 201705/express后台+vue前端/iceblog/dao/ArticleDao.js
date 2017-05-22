var dbFactory = require('../utils/dbFactory');
module.exports.getArticles = function (success, fail) {
    dbFactory.execQuery({
        sql: 'select * from articles'
    }, success, fail);
};
module.exports.getArticles2 = function () {
    return dbFactory.execQuery2({
        sql: 'select * from articles'
    });
};