-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: lolport
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `feedback_board`
--

DROP TABLE IF EXISTS `feedback_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feedback_board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `ip` varchar(30) NOT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback_board`
--

LOCK TABLES `feedback_board` WRITE;
/*!40000 ALTER TABLE `feedback_board` DISABLE KEYS */;
INSERT INTO `feedback_board` VALUES (4,'그라싼난','127.0.0.1','<p>헤이요요요</p>','2021-05-03 01:50:52','asdb1234'),(5,'ㅁㄴㅇㄹ','127.0.0.1','<p>ㅁㄴㅇㄹ</p>','2021-05-03 21:03:36','ㅁㄴㅇㄹ'),(6,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇㄹ</p>','2021-05-03 21:05:16','ㄻㄴㅇㄹ'),(7,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇㄹ</p>','2021-05-03 21:05:17','ㄻㄴㅇㄹ'),(8,'asdf','127.0.0.1','<p>ㅁㄴㅇasdf</p>','2021-05-03 21:05:20','asdf'),(9,'asdf','127.0.0.1','<p>asdf</p>','2021-05-03 21:05:22','asdf'),(10,'asdf','127.0.0.1','<p>asdfasd</p>','2021-05-03 21:05:24','asdf'),(11,'123','127.0.0.1','<p>asdf</p>','2021-05-03 21:05:27','asd'),(12,'asdl123','127.0.0.1','<p>헬로우우우!!</p>','2021-05-06 18:45:04','enenenen'),(13,'dododo123','127.0.0.1','<p>두두둥등장</p>','2021-05-06 18:53:48','dududu123'),(14,'123123','127.0.0.1','<p>아하하하하하하</p>','2021-05-06 19:04:13','123123'),(15,'asda','127.0.0.1','<p>HIHIHIHI123123123123</p>','2021-05-06 19:04:42','asd'),(16,'ased','127.0.0.1','<p>helllow!@!@!2</p>','2021-05-06 19:05:00','123'),(17,'asda','127.0.0.1','<p>asda123</p>','2021-05-06 19:05:53','asd'),(18,'asd','127.0.0.1','<p>asdasd</p>','2021-05-06 19:06:36','asd'),(19,'asd','127.0.0.1','<p>asdasd</p>','2021-05-06 19:06:54','asd'),(20,'asd','127.0.0.1','<p>123123123</p>','2021-05-06 19:07:50','asd'),(21,'asd','127.0.0.1','<p>asd</p>','2021-05-06 19:10:11','asd'),(22,'asd','127.0.0.1','<p>asd</p>','2021-05-06 19:11:16','asd'),(23,'asd','127.0.0.1','<p>asdasd</p>','2021-05-06 19:50:03','asd'),(24,'asd','127.0.0.1','<p>12313adasd</p>','2021-05-06 19:50:39','asd'),(25,'asd','127.0.0.1','<p>asd</p>','2021-05-06 19:51:26','asd'),(26,'asd','127.0.0.1','<p>asdasda</p>','2021-05-06 19:53:02','asd'),(27,'asd','127.0.0.1','<p>asdasd</p>','2021-05-06 19:53:04','asd'),(28,'123','127.0.0.1','<p>123123123</p>','2021-05-06 19:53:07','123123'),(29,'asd','127.0.0.1','<p>asdfsdaf123123123</p>','2021-05-06 19:53:39','asd'),(30,'asd','127.0.0.1','<p style=\"text-align: center;\">asdasdasdasd</p>','2021-05-06 19:59:32','asd'),(31,'123','127.0.0.1','<p>123</p>','2021-05-06 20:57:53','123'),(32,'123','127.0.0.1','<p>asdf&nbsp;adda a d ddasd as&amp;nbsp; dasasad asdadasdasdasd dsa sad as da s das dasdas das das das dsa asd as das asa</p>','2021-05-06 20:59:08','123'),(33,'123','127.0.0.1','<p>asdf&nbsp;adda a d ddasd as&amp;nbsp; dasasad asdadasdasdasd dsa sad as da s das dasdas das das das dsa asd as das asaasdf&nbsp;adda a d ddasd as&amp;nbsp; dasasad asdadasdasdasd dsa sad as da s das dasdas das das das dsa asd as das asaasdf&nbsp;adda a d ddasd as&amp;nbsp; dasasad asdadasdasdasd dsa sad as da s das dasdas das das das dsa asd as das asa<br></p>','2021-05-06 21:00:29','123'),(34,'ffHHHasd','127.0.0.1','<p>asd</p>','2021-05-07 00:11:39','asd'),(35,'ㅁㄴㅇㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇㅁㄴㅇ</p>','2021-05-13 15:12:57','ㅁㄴㅇㅁㄴㅇ'),(36,'ㅁㄴㅇㅁㄴ','127.0.0.1','<p>ㅁㄴㅇㅁㄴㅇ</p>','2021-05-13 15:13:00','ㅇㅁㄴㅇ'),(37,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇ</p>','2021-05-13 15:13:01','ㅁㄴㅇ'),(38,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇ</p>','2021-05-13 15:13:03','ㅁㄴㅇ'),(39,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇ</p>','2021-05-13 15:13:05','ㅁㄴㅇ'),(40,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇ</p>','2021-05-13 15:13:07','ㅁㄴㅇ'),(41,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇ</p>','2021-05-13 15:13:09','ㅁㄴㅇ'),(42,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇ</p>','2021-05-13 15:13:10','ㅁㄴㅇ'),(43,'ㅁㄴㅇ','127.0.0.1','<p>ㅁㄴㅇ</p>','2021-05-13 15:13:12','ㅁㄴㅇ'),(44,'asd','127.0.0.1','<p>asd</p>','2021-05-13 19:52:56','asd'),(45,'asd','127.0.0.1','<p>asd</p>','2021-05-13 19:53:05','asd'),(46,'asd','127.0.0.1','<p>asd</p>','2021-05-13 19:53:24','asd'),(47,'asd','127.0.0.1','<p>asd</p>','2021-05-13 19:53:27','asd'),(48,'asd','127.0.0.1','<p>asd</p>','2021-05-13 19:53:29','asd'),(49,'asd','127.0.0.1','<p>asd</p>','2021-05-13 19:53:32','asd'),(50,'asd','127.0.0.1','<p>asdasd</p>','2021-05-13 19:53:41','asd'),(51,'asd','127.0.0.1','<p>asdasd</p>','2021-05-13 19:53:52','asd'),(52,'asd','127.0.0.1','<p>asdasd</p>','2021-05-13 19:53:55','asd'),(53,'asd','127.0.0.1','<p>asdasd</p>','2021-05-13 19:53:57','asd'),(54,'asd','127.0.0.1','<p>asdasd</p>','2021-05-13 19:53:59','asd'),(55,'asd','127.0.0.1','<p>asdasd</p>','2021-05-13 19:54:01','asd'),(56,'x','127.0.0.1','<p>x</p>','2021-05-13 19:56:27','xx'),(57,'xx','127.0.0.1','<p>xx</p>','2021-05-13 19:56:29','xx'),(58,'asd','127.0.0.1','<p>asdasdasdasda13123</p>','2021-05-13 20:30:30','asd'),(59,'ㅁㄴㅇㅁㄴㅇ','127.0.0.1','<p style=\"text-align: center; \"><span style=\"font-size: 60px;\"><em>ㅁㄴㅇ</em></span></p>','2021-05-24 01:18:50','ㅁㄴㅇㅁㄴㅇ');
/*!40000 ALTER TABLE `feedback_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportInfo`
--

DROP TABLE IF EXISTS `reportInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportInfo` (
  `고의적_죽음` int(1) DEFAULT '0',
  `욕설` int(1) DEFAULT '0',
  `패드립` int(1) DEFAULT '0',
  `cs_뺏어먹기` int(1) DEFAULT '0',
  `픽창_악의적_닷지유도` int(1) DEFAULT '0',
  `comment` varchar(200) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `puuid` varchar(200) NOT NULL,
  `Img` varchar(100) DEFAULT '0',
  `리폿날짜` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `puuid` (`puuid`),
  CONSTRAINT `reportInfo_ibfk_1` FOREIGN KEY (`puuid`) REFERENCES `userInfo` (`puuid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportInfo`
--

LOCK TABLES `reportInfo` WRITE;
/*!40000 ALTER TABLE `reportInfo` DISABLE KEYS */;
INSERT INTO `reportInfo` VALUES (1,0,0,0,0,'여기는 코멘트!!',1,'iKO6rgB-O1-7fdDK6PenKbb5wX1eiseEWD86sD-puB5sXzUywpWyExUHBhR5Oj6vRXdpJo_CXmftmA','','2021-04-09 23:04:37'),(1,0,0,0,0,'asd',2,'iKO6rgB-O1-7fdDK6PenKbb5wX1eiseEWD86sD-puB5sXzUywpWyExUHBhR5Oj6vRXdpJo_CXmftmA','1617977270855.png;1617977270856.png;1617977270856.jpg;1617977270856.jpg;','2021-04-09 23:07:51'),(1,0,0,0,0,'asd',3,'iKO6rgB-O1-7fdDK6PenKbb5wX1eiseEWD86sD-puB5sXzUywpWyExUHBhR5Oj6vRXdpJo_CXmftmA','','2021-04-09 23:08:23'),(0,1,0,0,0,'asd',4,'iKO6rgB-O1-7fdDK6PenKbb5wX1eiseEWD86sD-puB5sXzUywpWyExUHBhR5Oj6vRXdpJo_CXmftmA','1617977338801.png;','2021-04-09 23:08:59'),(1,0,1,1,0,'아주 나쁜놈 바로 욕 박아버리더라구요',5,'iKO6rgB-O1-7fdDK6PenKbb5wX1eiseEWD86sD-puB5sXzUywpWyExUHBhR5Oj6vRXdpJo_CXmftmA','1618842281799.PNG;1618842281800.PNG;1618842281801.PNG;1618842281802.PNG;1618842281805.PNG;','2021-04-19 23:24:42');
/*!40000 ALTER TABLE `reportInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userInfo`
--

DROP TABLE IF EXISTS `userInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userInfo` (
  `puuid` varchar(200) NOT NULL,
  `닉네임` varchar(30) NOT NULL,
  PRIMARY KEY (`puuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userInfo`
--

LOCK TABLES `userInfo` WRITE;
/*!40000 ALTER TABLE `userInfo` DISABLE KEYS */;
INSERT INTO `userInfo` VALUES ('iKO6rgB-O1-7fdDK6PenKbb5wX1eiseEWD86sD-puB5sXzUywpWyExUHBhR5Oj6vRXdpJo_CXmftmA','mooyoon');
/*!40000 ALTER TABLE `userInfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-27 20:59:17
