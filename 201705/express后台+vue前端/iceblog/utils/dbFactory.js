/**
 * 数据库模块
 */
var config = require("../config/db_config.js");

var options = {
    'host': config.dbhost,
    'port': config.port,
    'user': config.user,
    'password': config.password,
    'database': config.db,
    /*'charset': config.charset,
    'connectionLimit': config.maxConnLimit,
    'supportBigNumbers': true,
    'bigNumberStrings': true*/
};

var mysql = require('mysql');
var pool = mysql.createPool(options);

/**
 * 释放数据库连接
 */
exports.release = function (connection) {
    connection.end(function (error) {
        //console.log('Connection closed');
    });
};

/**
 * 执行查询
 */
exports.execQuery = function (options, success, fail) {
    pool.getConnection(function (error, connection) {
        if (error) {
            return fail('db连接获取异常');
        }

        // 查询参数
        var sql = options['sql'];
        var args = options['args'];

        // 执行查询
        if (!args) {
            var query = connection.query(sql, function (error, results) {
                if (error) {
                    return fail('数据库链接异常');
                }

                // 处理结果
                return success(results);
            });
        } else {
            var query = connection.query(sql, args, function (error, results) {
                if (error) {
                    return fail('执行错误');
                }

                // 处理结果
                return success(results);
            });
        }
        console.log(sql);

        // 返回连接池
        connection.release(function (error) {
            if (error) {
                return fail('db连接释放失败');
            }
        });
    });
};

/**
 * 执行查询(promise)
 */
exports.execQuery2 = function (options) {
    return new Promise(function(resolve, reject){
        pool.getConnection(function (error, connection) {
            if (error) {
                return reject('db连接获取异常');
            }

            // 查询参数
            var sql = options['sql'];
            var args = options['args'];

            // 执行查询
            if (!args) {
                var query = connection.query(sql, function (error, results) {
                    if (error) {
                        return reject('数据库链接异常');
                    }

                    // 处理结果
                    return resolve(results);
                });
            } else {
                var query = connection.query(sql, args, function (error, results) {
                    if (error) {
                        return reject('执行错误');
                    }

                    // 处理结果
                    return resolve(results);
                });
            }
            console.log(sql);

            // 返回连接池
            connection.release(function (error) {
                if (error) {
                    return reject('db连接释放失败');
                }
            });
        });
    });
};
