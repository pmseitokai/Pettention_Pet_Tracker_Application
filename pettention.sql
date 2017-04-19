-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- โฮสต์: localhost
-- เวลาในการสร้าง: 04 ธ.ค. 2016  21:10น.
-- เวอร์ชั่นของเซิร์ฟเวอร์: 5.5.50-0ubuntu0.14.04.1
-- รุ่นของ PHP: 5.5.9-1ubuntu4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- ฐานข้อมูล: `pettention`
--

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `keys`
--

CREATE TABLE IF NOT EXISTS `keys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `key` varchar(40) CHARACTER SET utf8 NOT NULL,
  `level` int(2) NOT NULL,
  `ignore_limits` tinyint(1) NOT NULL DEFAULT '0',
  `is_private_key` tinyint(1) NOT NULL DEFAULT '0',
  `ip_addresses` text CHARACTER SET utf8,
  `date_created` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=193 ;

--
-- dump ตาราง `keys`
--

INSERT INTO `keys` (`id`, `user_id`, `key`, `level`, `ignore_limits`, `is_private_key`, `ip_addresses`, `date_created`) VALUES
(1, 1, '123456', 0, 0, 0, NULL, 0),
(2, 2, 'qfwa6V4bwqxKTBRuVNxu', 0, 0, 0, NULL, 0),
(3, 10, 'EZCpKb3brSC4HG2qYFx5', 0, 0, 0, NULL, 0),
(4, 11, '159632478532163942357', 0, 0, 0, NULL, 0),
(5, 12, '159632478532163942357', 0, 0, 0, NULL, 0),
(6, 100, 'x0pbc3tbxwa6jMW1JDNx', 0, 0, 0, NULL, 0),
(7, 101, '159632478532163942357', 0, 0, 0, NULL, 0),
(8, 102, 'Zs1b9Jfo6YiEOJSjI7fd', 0, 0, 0, NULL, 0),
(9, 103, '159632478532163942357', 0, 0, 0, NULL, 0),
(10, 104, '159632478532163942357', 0, 0, 0, NULL, 0),
(11, 105, 'aNLC3bJChZM5GauIBbXJ', 0, 0, 0, NULL, 0),
(12, 106, '159632478532163942357', 0, 0, 0, NULL, 0),
(13, 107, 'wZv9iDGTWrxEVuhhepD7', 0, 0, 0, NULL, 0),
(14, 108, '159632478532163942357', 0, 0, 0, NULL, 0),
(15, 109, '159632478532163942357', 0, 0, 0, NULL, 0),
(16, 110, 'KOmT56YvRyYMNxNO8Trb', 0, 0, 0, NULL, 0),
(17, 111, '159632478532163942357', 0, 0, 0, NULL, 0),
(18, 112, '159632478532163942357', 0, 0, 0, NULL, 0),
(19, 113, '159632478532163942357', 0, 0, 0, NULL, 0),
(20, 114, '2BgTK2tv65LHO6zB5USM', 0, 0, 0, NULL, 0),
(21, 115, '159632478532163942357', 0, 0, 0, NULL, 0),
(22, 116, '159632478532163942357', 0, 0, 0, NULL, 0),
(23, 117, '159632478532163942357', 0, 0, 0, NULL, 0),
(24, 118, '159632478532163942357', 0, 0, 0, NULL, 0),
(25, 119, '159632478532163942357', 0, 0, 0, NULL, 0),
(26, 120, '159632478532163942357', 0, 0, 0, NULL, 0),
(27, 121, 'OIM45tzrpZTl8IQ06C1a', 0, 0, 0, NULL, 0),
(28, 122, '159632478532163942357', 0, 0, 0, NULL, 0),
(29, 123, '159632478532163942357', 0, 0, 0, NULL, 0),
(30, 124, '159632478532163942357', 0, 0, 0, NULL, 0),
(31, 125, '159632478532163942357', 0, 0, 0, NULL, 0),
(32, 126, '159632478532163942357', 0, 0, 0, NULL, 0),
(33, 127, '159632478532163942357', 0, 0, 0, NULL, 0),
(34, 128, '159632478532163942357', 0, 0, 0, NULL, 0),
(35, 129, '159632478532163942357', 0, 0, 0, NULL, 0),
(36, 130, '159632478532163942357', 0, 0, 0, NULL, 0),
(37, 131, '159632478532163942357', 0, 0, 0, NULL, 0),
(38, 132, '159632478532163942357', 0, 0, 0, NULL, 0),
(39, 133, '159632478532163942357', 0, 0, 0, NULL, 0),
(40, 134, '159632478532163942357', 0, 0, 0, NULL, 0),
(41, 135, '159632478532163942357', 0, 0, 0, NULL, 0),
(42, 136, '159632478532163942357', 0, 0, 0, NULL, 0),
(43, 137, '159632478532163942357', 0, 0, 0, NULL, 0),
(44, 138, '159632478532163942357', 0, 0, 0, NULL, 0),
(45, 139, '159632478532163942357', 0, 0, 0, NULL, 0),
(46, 140, '159632478532163942357', 0, 0, 0, NULL, 0),
(47, 141, '159632478532163942357', 0, 0, 0, NULL, 0),
(48, 142, '597413682', 0, 0, 0, NULL, 0),
(49, 143, '159632478532163942357', 0, 0, 0, NULL, 0),
(50, 144, '159632478532163942357', 0, 0, 0, NULL, 0),
(51, 145, '159632478532163942357', 0, 0, 0, NULL, 0),
(52, 146, '159632478532163942357', 0, 0, 0, NULL, 0),
(53, 147, '159632478532163942357', 0, 0, 0, NULL, 0),
(54, 148, '159632478532163942357', 0, 0, 0, NULL, 0),
(55, 149, '159632478532163942357', 0, 0, 0, NULL, 0),
(56, 150, '159632478532163942357', 0, 0, 0, NULL, 0),
(57, 151, '159632478532163942357', 0, 0, 0, NULL, 0),
(58, 152, '159632478532163942357', 0, 0, 0, NULL, 0),
(59, 153, '159632478532163942357', 0, 0, 0, NULL, 0),
(60, 154, '159632478532163942357', 0, 0, 0, NULL, 0),
(61, 155, '159632478532163942357', 0, 0, 0, NULL, 0),
(62, 156, '159632478532163942357', 0, 0, 0, NULL, 0),
(63, 157, '159632478532163942357', 0, 0, 0, NULL, 0),
(64, 158, '159632478532163942357', 0, 0, 0, NULL, 0),
(65, 159, '159632478532163942357', 0, 0, 0, NULL, 0),
(66, 160, '159632478532163942357', 0, 0, 0, NULL, 0),
(67, 161, '159632478532163942357', 0, 0, 0, NULL, 0),
(68, 162, '159632478532163942357', 0, 0, 0, NULL, 0),
(69, 163, '159632478532163942357', 0, 0, 0, NULL, 0),
(70, 164, '159632478532163942357', 0, 0, 0, NULL, 0),
(71, 165, '159632478532163942357', 0, 0, 0, NULL, 0),
(72, 166, '159632478532163942357', 0, 0, 0, NULL, 0),
(73, 167, '159632478532163942357', 0, 0, 0, NULL, 0),
(74, 168, '159632478532163942357', 0, 0, 0, NULL, 0),
(75, 169, '159632478532163942357', 0, 0, 0, NULL, 0),
(76, 170, '159632478532163942357', 0, 0, 0, NULL, 0),
(77, 171, '159632478532163942357', 0, 0, 0, NULL, 0),
(78, 172, '159632478532163942357', 0, 0, 0, NULL, 0),
(79, 173, '159632478532163942357', 0, 0, 0, NULL, 0),
(80, 174, '159632478532163942357', 0, 0, 0, NULL, 0),
(81, 175, '159632478532163942357', 0, 0, 0, NULL, 0),
(82, 176, '159632478532163942357', 0, 0, 0, NULL, 0),
(83, 177, '159632478532163942357', 0, 0, 0, NULL, 0),
(84, 178, '159632478532163942357', 0, 0, 0, NULL, 0),
(85, 179, '159632478532163942357', 0, 0, 0, NULL, 0),
(86, 180, '159632478532163942357', 0, 0, 0, NULL, 0),
(87, 181, '159632478532163942357', 0, 0, 0, NULL, 0),
(88, 182, '159632478532163942357', 0, 0, 0, NULL, 0),
(89, 183, '159632478532163942357', 0, 0, 0, NULL, 0),
(90, 184, '159632478532163942357', 0, 0, 0, NULL, 0),
(91, 185, '159632478532163942357', 0, 0, 0, NULL, 0),
(92, 186, '159632478532163942357', 0, 0, 0, NULL, 0),
(93, 187, '159632478532163942357', 0, 0, 0, NULL, 0),
(94, 188, '159632478532163942357', 0, 0, 0, NULL, 0),
(95, 189, '159632478532163942357', 0, 0, 0, NULL, 0),
(96, 190, '159632478532163942357', 0, 0, 0, NULL, 0),
(97, 191, '159632478532163942357', 0, 0, 0, NULL, 0),
(98, 192, '159632478532163942357', 0, 0, 0, NULL, 0),
(99, 193, '159632478532163942357', 0, 0, 0, NULL, 0),
(100, 194, '159632478532163942357', 0, 0, 0, NULL, 0),
(101, 195, '159632478532163942357', 0, 0, 0, NULL, 0),
(102, 196, '159632478532163942357', 0, 0, 0, NULL, 0),
(103, 197, '159632478532163942357', 0, 0, 0, NULL, 0),
(104, 198, '159632478532163942357', 0, 0, 0, NULL, 0),
(105, 199, '159632478532163942357', 0, 0, 0, NULL, 0),
(106, 200, '159632478532163942357', 0, 0, 0, NULL, 0),
(107, 201, '159632478532163942357', 0, 0, 0, NULL, 0),
(108, 202, '159632478532163942357', 0, 0, 0, NULL, 0),
(109, 203, '159632478532163942357', 0, 0, 0, NULL, 0),
(110, 204, '159632478532163942357', 0, 0, 0, NULL, 0),
(111, 205, '159632478532163942357', 0, 0, 0, NULL, 0),
(112, 206, '159632478532163942357', 0, 0, 0, NULL, 0),
(113, 207, 'D23G5WNVZ2UO3DRtvCDt', 0, 0, 0, NULL, 0),
(114, 208, '159632478532163942357', 0, 0, 0, NULL, 0),
(115, 209, '159632478532163942357', 0, 0, 0, NULL, 0),
(116, 210, '159632478532163942357', 0, 0, 0, NULL, 0),
(117, 211, '159632478532163942357', 0, 0, 0, NULL, 0),
(118, 212, '159632478532163942357', 0, 0, 0, NULL, 0),
(119, 213, '159632478532163942357', 0, 0, 0, NULL, 0),
(120, 214, '159632478532163942357', 0, 0, 0, NULL, 0),
(121, 215, '9iC5AIVQLY8bSTdFFQEp', 0, 0, 0, NULL, 0),
(122, 216, 'yyanRQp6KuBlkIB5cdKO', 0, 0, 0, NULL, 0),
(123, 217, '159632478532163942357', 0, 0, 0, NULL, 0),
(124, 218, 'XXBU1mldWd8HWmUYKa98', 0, 0, 0, NULL, 0),
(125, 219, 'JjkkIdoqJrHqBZR1HjXr', 0, 0, 0, NULL, 0),
(126, 7, '5q20RjrZSxe2kVpKXQqd', 0, 0, 0, NULL, 0),
(134, 3, 'I9m3LCgbTpa5OPxRKKl8', 0, 0, 0, NULL, 0),
(149, 5, 'Gc6TEZCpKb3brSC4HG2q', 0, 0, 0, NULL, 0),
(174, 4, 'HbhNn1wk5c1LEGmNqWEE', 0, 0, 0, NULL, 0),
(175, 6, '123969542', 0, 0, 0, NULL, 0),
(176, 50, 'wVbqnFFxH9YzAAXsDGYH', 0, 0, 0, NULL, 0),
(177, 51, 'D0Ksive2xwRKmDmVcWVo', 0, 0, 0, NULL, 0),
(178, 52, 'cXqJ9XKHUsnXNUnJGjmK', 0, 0, 0, NULL, 0),
(179, 53, 'slDmwuaq5VZDBKkP4xUm', 0, 0, 0, NULL, 0),
(180, 54, 'cc2gA5wMjo4Kd4hSDAeo', 0, 0, 0, NULL, 0),
(181, 55, 'TAXQJ9fumOxMBxrqNM1E', 0, 0, 0, NULL, 0),
(182, 8, 'nvFFrllCRA41rctAyECx', 0, 0, 0, NULL, 0),
(183, 9, 'AebOsxD7BBL9IK3Z2Osf', 0, 0, 0, NULL, 0),
(184, 222, 'jjwqP6RKsAsvpDjipATd', 0, 0, 0, NULL, 0),
(185, 223, 'tbWPeO8zSCYlRGIYaA4N', 0, 0, 0, NULL, 0),
(186, 224, 'tiNnpe6Av8NizXtfYccD', 0, 0, 0, NULL, 0),
(187, 225, 'G9At6ja3u0rcGb0E1kWC', 0, 0, 0, NULL, 0),
(188, 56, 'hfBCg58T2SvdxcpWha4U', 0, 0, 0, NULL, 0),
(189, 227, 'd6nvY1ptWIohXaUCmP3J', 0, 0, 0, NULL, 0),
(190, 228, 'HIgUgYTE5Yd6T3GoT3h5', 0, 0, 0, NULL, 0),
(191, 229, 'B24uYCj0FUY8gCplSYsD', 0, 0, 0, NULL, 0),
(192, 230, 'G3k0zXSy3V0ruqQUKqYG', 0, 0, 0, NULL, 0);

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `missing_pet`
--

CREATE TABLE IF NOT EXISTS `missing_pet` (
  `missing_id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `pet_id` int(11) NOT NULL,
  `pet_name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_time` datetime DEFAULT NULL,
  `owner_name` varchar(60) COLLATE utf8_unicode_ci DEFAULT NULL,
  `detail` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `picture` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`missing_id`),
  KEY `pet_id` (`pet_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2002 ;

--
-- dump ตาราง `missing_pet`
--

INSERT INTO `missing_pet` (`missing_id`, `pet_id`, `pet_name`, `date_time`, `owner_name`, `detail`, `picture`) VALUES
(2001, 0, 'Meow', '2016-08-31 00:00:00', 'Nitit', NULL, NULL);

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `pet`
--

CREATE TABLE IF NOT EXISTS `pet` (
  `pet_id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` char(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `age` int(2) DEFAULT NULL,
  `detail` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(16) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gps_serial` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `picture` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `missing` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`pet_id`),
  UNIQUE KEY `gps_serial` (`gps_serial`),
  KEY `user_id` (`username`),
  KEY `username` (`username`),
  KEY `gps_id` (`gps_serial`),
  KEY `username_2` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1049 ;

--
-- dump ตาราง `pet`
--

INSERT INTO `pet` (`pet_id`, `name`, `gender`, `type`, `birth_date`, `age`, `detail`, `username`, `gps_serial`, `picture`, `missing`) VALUES
(1001, 'Mu-mu', 'M', 'cat', '2016-09-09', 1, 'น้องหมาสุดหล่อ บ้อกๆ', 'admin', NULL, 'https://pettention.ga/pettention/img/profile/pet/profile_1001.jpg', '0'),
(1002, 'Pudding', 'F', 'Cat', '2014-08-06', 2, NULL, '10001', NULL, '', '0'),
(1003, 'Max', 'M', 'Cat', '2015-02-08', 1, NULL, '10002', NULL, '', '0'),
(1004, 'Mi-mi', 'F', 'cat', '2016-07-07', 1, 'แมวเหมียว ขนสีขาวตัวเล็กน่ารัก', 'admin', NULL, 'https://pettention.ga/pettention/img/profile/pet/profile_1004.JPG', '1'),
(1009, 'Oong', 'F', 'cat', '0000-00-00', NULL, 'แมวเปอร์เซียสีน้ำตาล', 'admon', NULL, '', ''),
(1014, 'navi', 'M', 'cat', '0000-00-00', NULL, 'แม่นสัส ๆ', '', NULL, 'https://static-cdn.jtvnw.net/previews-ttv/live_user_epicenter_en1-320x180.jpg', ''),
(1018, 'She', 'F', 'other', '2016-10-02', NULL, 'Frog', 'admin', NULL, 'https://babarahmaddotcom.files.wordpress.com/2016/07/frogwavinghand.jpg', '1'),
(1020, 'Hermes', 'F', 'other', '0000-00-00', NULL, 'Fox', 'opal', NULL, 'https://media.mnn.com/assets/images/2015/09/01-zen-fox.jpg', '1'),
(1021, 'Sassy', 'M', 'other', '0000-00-00', NULL, 'Pretty boy', 'opal', NULL, 'http://static.boredpanda.com/blog/wp-content/uploads/2016/02/juniper-fox-happiest-instagram-9.jpg', '1'),
(1024, '', '', '', '0000-00-00', NULL, '', 'eiei', NULL, '', ''),
(1025, '', '', '', '0000-00-00', NULL, '', 'eiei', NULL, '', ''),
(1026, '', '', '', '0000-00-00', NULL, '', 'eiei', NULL, '', ''),
(1027, 'Zeus', 'M', 'other', '0000-00-00', NULL, '', 'Amico', NULL, 'http://weknowyourdreams.com/images/zeus/zeus-02.jpg', ''),
(1028, 'Poseidon', 'M', 'other', '0000-00-00', NULL, '', 'Amico', NULL, 'http://mostwantedmegan.weebly.com/uploads/2/8/3/8/28389195/3247137_orig.jpg', ''),
(1029, 'Athena is a GOD', 'F', 'dog', '0000-00-00', NULL, '<b>HelloWorld</b>', 'Amico', NULL, '"><img src="http://www.greekmythology.com/images/mythology/athena_7.jpg"><"', '0'),
(1030, 'อุ๋งอุ๋ง', 'M', 'other', '2016-10-06', NULL, 'เป็นแมวน้ำตัวน้อยนุ่มนิ่ม', 'vmonov', NULL, 'https://pettention.ga/pettention/img/profile/pet/profile_1030.JPG', ''),
(1033, 'Vyrn', 'M', 'other', '2016-11-02', NULL, 'Giant Lizard', 'punch', 'gbf', 'https://pettention.ga/pettention/img/profile/pet/profile_1033.png', '0'),
(1039, 'Tom Yum Goong', 'M', 'dog', '2014-12-31', NULL, 'Bulldog', 'IT5624', 'PT3gSe51', 'https://pettention.ga/pettention/img/profile/pet/profile_1039.JPEG', ''),
(1040, 'Som Tam', 'M', 'dog', '2014-01-01', NULL, 'from Tibet', 'IT5624', 'PT3gSe01', 'https://pettention.ga/pettention/img/profile/pet/profile_1040.JPEG', '1'),
(1041, 'Pad Thai', 'F', 'other', '2016-02-29', NULL, 'White', 'IT5624', 'PT3gSe02', 'https://pettention.ga/pettention/img/profile/pet/profile_1041.JPEG', ''),
(1045, 'Nackny', 'M', 'other', '1997-04-25', NULL, 'หมุอ้วนแนค', 'admin', NULL, '', ''),
(1046, 'Bear', 'F', 'other', '2015-12-09', NULL, 'Bigger bear', 'punch', NULL, '', ''),
(1047, '', 'M', 'dog', '2016-11-06', NULL, 'E', 'punch', NULL, '', '');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `track`
--

CREATE TABLE IF NOT EXISTS `track` (
  `gps_serial` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `gps_id` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_time` datetime DEFAULT NULL,
  `latitude` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `longitude` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`gps_serial`),
  KEY `gps_serial` (`gps_serial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- dump ตาราง `track`
--

INSERT INTO `track` (`gps_serial`, `gps_id`, `date_time`, `latitude`, `longitude`) VALUES
('12ad22A2', '12ad22A2', '2016-11-07 22:38:30', '19.221222', '12.999399'),
('12ad22AD', '12ad22AD', '2016-10-05 00:12:05', '19.222222', '12.999999'),
('bbhhhbbb', 'bbhhhbbb', '2016-10-09 23:37:26', '59.901535', '99.769767'),
('gbf', 'gbf', '2016-11-02 22:04:58', '35.698190', '139.772314'),
('P10GPS03', 'P10GPS03', '2016-10-05 00:11:28', '13.6567811', '100.2128442'),
('popopo01', 'opopop01', '2016-12-03 23:48:49', '19.221222', '12.999399'),
('PT3gSe01', 'PT3gID01', '2016-11-06 01:07:01', '13.655646', '100.501453'),
('PT3gSe02', 'PT3gID01', '2016-11-07 22:38:22', '13.657160', '100.499731'),
('PT3gSe51', 'PT3gID51', '2016-11-07 13:06:14', '13.652492', '100.493660'),
('PT3gSe53', 'PT3gID53', '2016-11-02 09:44:21', '13.7468245', '100.5331226');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nickname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` char(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `picture` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `detail` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=87 ;

--
-- dump ตาราง `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `firstname`, `lastname`, `nickname`, `gender`, `email`, `address`, `phone`, `picture`, `detail`) VALUES
(1, 'admin', 'pettention', 'Mono', 'TheForestcat', 'qvmonovp', 'M', 'mono_omyim@live.com', '', '0839119827', 'https://pettention.ga/pettention/img/profile/user/profile_admin.jpg', 'หากพบเจอสัตว์เลี้ยง กรุนาติดต่อที่ 111-222-22'),
(2, 'asdad', '213456', 'qwerty', 'testtt', 'myumn', 'F', 'polls@hotmail.com', NULL, '025431566', NULL, NULL),
(3, 'horizon', 'hang1234', 'Kungho', 'Longzuan', 'Kung', 'M', 'kungho123@hotmail.com', NULL, '0896642345', NULL, NULL),
(4, 'howeq', 'gaas123', 'เกหดหก', 'สกดดเหกา', 'ฟำ', 'F', 'qwerty@gmail.com', NULL, '0863564520', NULL, NULL),
(5, 'pettention', '12345678', 'Pettention', 'SITKMUTT', 'PETT', 'M', 'example@hotmail.com', NULL, '0863214526', NULL, NULL),
(6, 'pmseitokai', '987456123', 'Nitit', 'Phetchkam', 'Punch', 'M', 'nitit.punch@gmail.com', NULL, '0842354567', NULL, NULL),
(7, 'Runsa77', 'pim5569', 'Liza', 'Iowaz', 'Lizz', 'F', 'lizz777@gmail.com', NULL, '0899645315', NULL, NULL),
(8, 'tattoou', 'fenza456', 'Fang', 'Sololip', 'Oat', 'M', 'fang456@hotmail.com', NULL, '0846511234', NULL, NULL),
(9, 'Terew', '8855sa', 'Yaoh', 'hodsa', 'Nono', 'F', 'uno12@hotmail.com', NULL, '0869465554', NULL, NULL),
(10, 'test', 'test', 'test', 'setset', 'setsetes', 'M', 'testset@hotmail.com', NULL, '0834568854', NULL, NULL),
(11, 'testasd', 'testfsg', 'asdadfghf', 'qwretddf', 'fhdgsd', 'F', 'sffsg@hfdj.com', NULL, '0812605563', NULL, NULL),
(12, 'testuser', 'test1234', 'test', 'pet', 'pett', 'F', 'test@hotmail.com', NULL, '0832452685', NULL, NULL),
(17, 'admon', '1111', 'Manee', 'Mehai', 'Manai Haiyee', NULL, 'Mana@gmail.com', NULL, NULL, NULL, NULL),
(56, 'vmonov', 'mononomo', 'Patcharapon', 'Pornvechumnuay', 'Mono', '', 'Mono_omyim@live.com', '', '', 'https://pettention.ga/pettention/img/profile/user/profile_vmonov.jpeg', 'ฉันสวยค่า !!'),
(58, 'opal', '000', 'Pit', 'Keke', 'Opyopall', 'F', 'pitchaya.k.kmutt@gmail.com', '', '', 'http://www.daradaily.com/content/news/photo-56888.jpg', NULL),
(59, 'punch', '', 'Poramin', 'Phetchkam', 'Punch', 'M', 'emilia@tan.com', '', '', 'https://pettention.ga/pettention/img/profile/user/profile_punch.jpg', ''),
(60, 'opal2', '12345', 'O', 'P', 'Opy', 'F', 'pitchaya.k.kmutt@gmail.com', NULL, NULL, NULL, NULL),
(61, 'Mono1234', '1234', 'Patcharapon', 'Pornvechumnuay', 'Monoxide', 'M', 'mono_omyim@yahoo.com', NULL, NULL, NULL, NULL),
(81, 'Sealsolo', '483466', 'Sittisak', 'Prunglek', 'Watercatz', 'M', 'sealsolo17@gmail.com', NULL, NULL, NULL, NULL),
(83, 'IT5624', 'ITSITKMUTT', 'Pet', 'Tention', 'PetTention Testers', 'F', 'pitchaya.k@gmail.com', '', '', 'https://pettention.ga/pettention/img/profile/user/profile_IT5624.png', 'Username by PetTention Team\n>>\nCONTACT US : www.sitportfolio.me/\nshowproject/IT56-24'),
(84, 'ei', 'ei', 'ei', 'ei', 'eieieieiei', 'M', 'pp@ra', '', '', '', ''),
(85, 'Easy', 'easy', 'Easy', 'Easy', 'Easyyyyyyy', 'M', 'easy@easy.easy', NULL, NULL, NULL, NULL),
(86, 'Tt', 'tt', 'Tt', 'Tt', 'Tt', 'F', 'tt@tt.com', NULL, NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
