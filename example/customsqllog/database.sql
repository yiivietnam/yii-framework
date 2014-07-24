/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.6.16 : Database - customsqllog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`customsqllog` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `customsqllog`;

/*Table structure for table `tbl_example` */

DROP TABLE IF EXISTS `tbl_example`;

CREATE TABLE `tbl_example` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT 'Title',
  `description` text CHARACTER SET utf8 COMMENT 'Description',
  `file` varchar(255) DEFAULT NULL COMMENT 'File',
  `is_public` tinyint(1) DEFAULT '1' COMMENT 'Status',
  `created` datetime DEFAULT NULL COMMENT 'Created',
  `modified` datetime DEFAULT NULL COMMENT 'Modified',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=ujis;

/*Data for the table `tbl_example` */

insert  into `tbl_example`(`id`,`title`,`description`,`file`,`is_public`,`created`,`modified`) values (1,'Post 1',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(2,'Post 2',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(3,'Post 3',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(4,'Post 4',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(5,'Post 5',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(6,'Post 6',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(7,'Post 7',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(8,'Post 8',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(9,'Post 9',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32'),(10,'Post 10',NULL,NULL,1,'2014-07-24 17:47:32','2014-07-24 17:47:32');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
