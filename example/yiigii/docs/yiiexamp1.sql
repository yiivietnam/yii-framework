/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.6.16 : Database - yiiexamp1
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`yiiexamp1` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `yiiexamp1`;

/*Table structure for table `tbl_category` */

DROP TABLE IF EXISTS `tbl_category`;

CREATE TABLE `tbl_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã',
  `slug` varchar(255) NOT NULL COMMENT 'Slug',
  `title` varchar(255) NOT NULL COMMENT 'Tiêu đề',
  `description` text COMMENT 'Chú thích',
  `is_public` tinyint(1) DEFAULT '1' COMMENT 'Trạng thái',
  `created` datetime DEFAULT NULL COMMENT 'Ngày tạo',
  `modified` datetime DEFAULT NULL COMMENT 'Cập nhật',
  `del_flg` tinyint(1) DEFAULT '0' COMMENT 'Xóa',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_category` */

insert  into `tbl_category`(`id`,`slug`,`title`,`description`,`is_public`,`created`,`modified`,`del_flg`) values (1,'dien-thoai','Điện thoại','',1,'2014-07-31 08:46:06','2014-07-31 08:46:06',0),(2,'may-tinh-xach-tay','Máy tính xách tay','',1,'2014-07-31 08:47:38','2014-07-31 08:53:29',1);

/*Table structure for table `tbl_product` */

DROP TABLE IF EXISTS `tbl_product`;

CREATE TABLE `tbl_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã',
  `title` varchar(255) NOT NULL COMMENT 'Tiêu đề',
  `description` text COMMENT 'Chú thích',
  `thumb` varchar(255) DEFAULT NULL COMMENT 'Ảnh',
  `price` float NOT NULL DEFAULT '0' COMMENT 'Giá',
  `is_public` tinyint(1) DEFAULT '1' COMMENT 'Trạng thái',
  `created` datetime DEFAULT NULL COMMENT 'Ngày tạo',
  `modified` datetime DEFAULT NULL COMMENT 'Cập nhật',
  `del_flg` tinyint(1) DEFAULT '0' COMMENT 'Xóa',
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_product_tbl_category_idx` (`category_id`),
  CONSTRAINT `fk_tbl_product_tbl_category` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_product` */

insert  into `tbl_product`(`id`,`title`,`description`,`thumb`,`price`,`is_public`,`created`,`modified`,`del_flg`,`category_id`) values (1,'Iphone 5 White','Chú thích cho sản phẩm iphone 5.','iphone5-white.jpg',500000,1,'2014-07-31 09:51:50','2014-07-31 10:17:49',0,1),(2,'Iphone 5 Black','Chú thích sản phẩm','iphone5-black.jpg',6000000,1,'2014-07-31 10:41:11','2014-07-31 10:41:11',0,1),(3,'MacBook','Chú thích sản phẩm','macbook-1.jpg',24000000,1,'2014-07-31 10:41:45','2014-07-31 10:41:45',0,2),(4,'iMac','Chú thích sản phẩm','mac-1.jpg',25000000,1,'2014-07-31 10:42:09','2014-07-31 10:42:09',0,2);

/*Table structure for table `tbl_user` */

DROP TABLE IF EXISTS `tbl_user`;

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã',
  `user_name` varchar(100) NOT NULL COMMENT 'Tài khoản',
  `user_pwd` varchar(100) NOT NULL COMMENT 'Mật khẩu',
  `firstname` varchar(50) DEFAULT NULL COMMENT 'Họ',
  `lastname` varchar(50) DEFAULT NULL COMMENT 'Tên',
  `email` varchar(100) DEFAULT NULL COMMENT 'Email',
  `is_superadmin` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Siêu quản trị',
  `is_public` tinyint(1) DEFAULT '1' COMMENT 'Trạng thái',
  `created` datetime DEFAULT NULL COMMENT 'Ngày tạo',
  `modified` datetime DEFAULT NULL COMMENT 'Cập nhật',
  `del_flg` tinyint(1) DEFAULT '0' COMMENT 'Xóa',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tbl_user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
