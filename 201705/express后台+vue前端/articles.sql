/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : nmblog

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2017-05-22 11:44:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `author` varchar(30) DEFAULT NULL,
  `content` text,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `del_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '第一篇文章', 'ice', '哈哈哈哈,哈哈哈哈第一篇文章诞生!!!!!!!！！！@#￥%……&*', '1', '1', null);
