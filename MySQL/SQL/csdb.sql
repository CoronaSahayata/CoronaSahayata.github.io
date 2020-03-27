-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.3.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for csdb
DROP DATABASE IF EXISTS `csdb`;
CREATE DATABASE IF NOT EXISTS `csdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `csdb`;

-- Dumping structure for table csdb.city_master
DROP TABLE IF EXISTS `city_master`;
CREATE TABLE IF NOT EXISTS `city_master` (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table csdb.country_master
DROP TABLE IF EXISTS `country_master`;
CREATE TABLE IF NOT EXISTS `country_master` (
  `country_code` varchar(3) NOT NULL,
  `country_name` varchar(255) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  PRIMARY KEY (`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table csdb.district_master
DROP TABLE IF EXISTS `district_master`;
CREATE TABLE IF NOT EXISTS `district_master` (
  `district_id` int(11) NOT NULL AUTO_INCREMENT,
  `district_name` varchar(255) DEFAULT NULL,
  `state_state_id` int(11) NOT NULL,
  PRIMARY KEY (`district_id`,`state_state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table csdb.groups_table
DROP TABLE IF EXISTS `groups_table`;
CREATE TABLE IF NOT EXISTS `groups_table` (
  `group_id` varchar(30) NOT NULL,
  `group_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table csdb.login
DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `user_id` varchar(16) NOT NULL,
  `password` varchar(32) NOT NULL,
  `group_group_id` varchar(30) NOT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`user_id`,`group_group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table csdb.state_master
DROP TABLE IF EXISTS `state_master`;
CREATE TABLE IF NOT EXISTS `state_master` (
  `state_id` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(255) DEFAULT NULL,
  `country_country_id` int(11) NOT NULL,
  PRIMARY KEY (`state_id`,`country_country_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table csdb.user_info
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE IF NOT EXISTS `user_info` (
  `login_user_id` varchar(16) NOT NULL,
  `first_name` varchar(250) NOT NULL,
  `last_name` varchar(250) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `mobile` varchar(13) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `pin` varchar(6) DEFAULT NULL,
  `city_master_city_id` int(11) DEFAULT NULL,
  `district_master_district_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`login_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
