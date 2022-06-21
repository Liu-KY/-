﻿# Host: 127.0.0.1  (Version: 5.5.53)
# Date: 2022-06-21 14:25:46
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "business"
#

DROP TABLE IF EXISTS `business`;
CREATE TABLE `business` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `B_date` int(11) NOT NULL DEFAULT '0' COMMENT '日期',
  `B_shop` int(11) NOT NULL DEFAULT '0' COMMENT '分店编号',
  `B_passengerFlow` int(11) NOT NULL DEFAULT '0' COMMENT '客流量',
  `B_totalPrices` int(11) NOT NULL DEFAULT '0' COMMENT '销售总价',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='店营业额';

#
# Data for table "business"
#

/*!40000 ALTER TABLE `business` DISABLE KEYS */;
INSERT INTO `business` VALUES (1,20220601,1,4574,216),(2,20220601,2,4117,262),(3,20220601,3,3086,376),(4,20220601,4,2507,176),(5,20220601,5,4219,258),(6,20220602,1,3637,132),(7,20220602,2,1817,314),(8,20220602,3,3455,428),(9,20220602,4,4672,474),(10,20220602,5,4174,491),(11,20220603,1,1613,293),(12,20220603,2,4873,492),(13,20220603,3,4210,399),(14,20220603,4,3946,102),(15,20220603,5,4631,158),(16,20220604,1,1448,177),(17,20220604,2,1181,337),(18,20220604,3,2846,124),(19,20220604,4,3247,164),(20,20220604,5,3390,134);
/*!40000 ALTER TABLE `business` ENABLE KEYS */;

#
# Structure for table "intendant"
#

DROP TABLE IF EXISTS `intendant`;
CREATE TABLE `intendant` (
  `A_id` int(11) NOT NULL AUTO_INCREMENT,
  `A_username` varchar(255) NOT NULL DEFAULT '' COMMENT '账号',
  `A_password` varchar(255) NOT NULL DEFAULT '' COMMENT '密码',
  `A_name` varchar(255) NOT NULL DEFAULT '' COMMENT '名字',
  `A_position` varchar(255) NOT NULL DEFAULT '' COMMENT '职位',
  `A_gender` varchar(255) DEFAULT NULL COMMENT '性别',
  `A_age` int(11) DEFAULT NULL COMMENT '年龄',
  PRIMARY KEY (`A_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='管理员账户';

#
# Data for table "intendant"
#

/*!40000 ALTER TABLE `intendant` DISABLE KEYS */;
INSERT INTO `intendant` VALUES (1,'1015194518','123456','杨幂','总经理','女',18),(2,'1772750','123456','迪丽热巴','副经理','女',18);
/*!40000 ALTER TABLE `intendant` ENABLE KEYS */;

#
# Structure for table "kind"
#

DROP TABLE IF EXISTS `kind`;
CREATE TABLE `kind` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `K_kind` varchar(255) NOT NULL DEFAULT '' COMMENT '种类',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='菜品种类';

#
# Data for table "kind"
#

/*!40000 ALTER TABLE `kind` DISABLE KEYS */;
INSERT INTO `kind` VALUES (1,'鲁菜'),(2,'川菜'),(3,'苏菜'),(4,'粤菜'),(5,'闽菜'),(6,'浙菜'),(7,'徽菜'),(8,'湘菜');
/*!40000 ALTER TABLE `kind` ENABLE KEYS */;

#
# Structure for table "menu"
#

DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `M_dishName` varchar(255) NOT NULL DEFAULT '' COMMENT '菜名',
  `M_kind` varchar(255) NOT NULL DEFAULT '' COMMENT '种类',
  `M_price` int(11) NOT NULL DEFAULT '0' COMMENT '价格',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COMMENT='菜单表';

#
# Data for table "menu"
#

/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'烤虾鸭','鲁菜',452),(2,'炒鸭兔','川菜',818),(3,'煎牛虾','苏菜',666),(4,'鸭牛','粤菜',669),(5,'蒸鸭鱼','闽菜',853),(6,'煮鸭','浙菜',610),(7,'蒸鸭兔','徽菜',386),(8,'蒸鸭鸡','湘菜',782),(9,'炸羊鸭','鲁菜',708),(10,'炸兔鸡','川菜',647),(11,'煮鹅鹅','苏菜',876),(12,'炸鹅','粤菜',680),(13,'炸兔鱼','闽菜',550),(14,'烧虾虾','浙菜',501),(15,'烧鸭羊','徽菜',456),(16,'烧鹅鱼','湘菜',877),(17,'煮兔兔','鲁菜',305),(18,'炒鸡鹅','川菜',239),(19,'烧兔兔','苏菜',773),(20,'烤羊鸡','粤菜',627),(21,'烧','闽菜',308),(22,'烧鸡虾','浙菜',485),(23,'煮羊','徽菜',469),(24,'炸鸭','湘菜',864),(25,'蒸兔鸭','鲁菜',584),(26,'兔鹅','川菜',868),(27,'炒鸭虾','苏菜',622),(28,'煎羊羊','粤菜',881),(29,'鹅鹅','闽菜',527),(30,'炸鸭牛','浙菜',396),(31,'烧羊鸭','徽菜',629),(32,'炸牛鹅','湘菜',721),(33,'煮鹅','鲁菜',356),(34,'炸牛','川菜',402),(35,'煮鸭牛','苏菜',236),(36,'炒牛鸭','粤菜',346),(37,'煮羊牛','闽菜',794),(38,'炖牛虾','浙菜',877),(39,'炸兔鹅','徽菜',317),(40,'炸鸡兔','湘菜',262),(41,'烤鸭','鲁菜',664),(42,'炸兔鸭','川菜',760),(43,'炸虾牛','苏菜',774),(44,'烧鹅鸡','粤菜',498),(45,'煎牛','闽菜',615),(46,'炖羊','浙菜',758),(47,'煮牛','徽菜',442),(48,'炸鹅鸭','湘菜',597),(49,'','',0);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

#
# Structure for table "outlet"
#

DROP TABLE IF EXISTS `outlet`;
CREATE TABLE `outlet` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `D_serial` int(11) NOT NULL DEFAULT '0' COMMENT '分店编号',
  `D_name` varchar(255) NOT NULL DEFAULT '' COMMENT '分店名',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='分店';

#
# Data for table "outlet"
#

/*!40000 ALTER TABLE `outlet` DISABLE KEYS */;
INSERT INTO `outlet` VALUES (1,1,'南山店'),(2,2,'福田店'),(3,3,'宝安店'),(4,4,'香港店'),(5,5,'美国店');
/*!40000 ALTER TABLE `outlet` ENABLE KEYS */;

#
# Structure for table "role"
#

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `R_name` varchar(255) NOT NULL DEFAULT '' COMMENT '名字',
  `R_salary` int(11) NOT NULL DEFAULT '0' COMMENT '工资',
  `R_position` varchar(255) NOT NULL DEFAULT '' COMMENT '职位',
  `R_serial` int(11) NOT NULL DEFAULT '0' COMMENT '分店编号',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COMMENT='职位表';

#
# Data for table "role"
#

/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'曹宜',14976,'店长',1),(2,'庞眉',15990,'店长',2),(3,'卢钊颖',10330,'店长',3),(4,'李兰莹',6841,'店长',4),(5,'唐镇霄',15951,'店长',5),(6,'李妤',10796,'副店长',1),(7,'柏思纯',14220,'副店长',2),(8,'鲁泽咏',13310,'副店长',3),(9,'费惠嘉',12516,'副店长',4),(10,'伍夕允',7984,'副店长',5),(11,'徐娅真',5628,'副店长',1),(12,'蓝昭函',9600,'副店长',2),(13,'昌月娜',17057,'副店长',3),(14,'卞腾怡',14482,'副店长',4),(15,'尤冠言',14705,'副店长',5),(16,'毕栋希',13175,'厨师',1),(17,'臧环芸',7285,'厨师',2),(18,'平梦',12018,'厨师',3),(19,'冯珍楠',11871,'厨师',4),(20,'葛惠固',16982,'厨师',5),(21,'阮希',14263,'厨师',1),(22,'卫冰',5130,'厨师',2),(23,'华悦',5062,'厨师',3),(24,'花德冰',13142,'厨师',4),(25,'蔡娴素',19907,'厨师',5),(26,'汤琬珍',8774,'店员',1),(27,'米融启',17996,'店员',2),(28,'闵融奇',15897,'店员',3),(29,'计华凡',7204,'店员',4),(30,'纪镇航',13864,'店员',5),(31,'韩丽',7791,'店员',1),(32,'祁琴育',18568,'店员',2),(33,'戴瑶可',17458,'店员',3),(34,'窦嘉聪',7714,'店员',4),(35,'郑萱克',13932,'店员',5),(36,'邱维',9426,'店员',1),(37,'熊茜',7495,'店员',2),(38,'周香嘉',11910,'店员',3),(39,'喻蓓',10290,'店员',4),(40,'柳莎朗',9346,'店员',5),(41,'汪娅弘',13357,'店员',1),(42,'邬佳',18429,'店员',2),(43,'彭启',19624,'店员',3),(44,'童婉全',19971,'店员',4),(45,'郑姣固',19095,'店员',5),(46,'乐秀',19973,'店员',1),(47,'王芳露',5584,'店员',2),(48,'于惠斌',9048,'店员',3),(49,'禹娟昭',18789,'店员',4),(50,'平秀瑗',9660,'店员',5),(51,'凤月',16384,'店员',1),(52,'倪淳悦',18058,'店员',2),(53,'席韵晨',9529,'店员',3),(54,'盛滢嫣',10462,'店员',4),(55,'邱雨羽',17209,'店员',5),(56,'郭淑琳',16689,'店员',1),(57,'凌璐',6771,'店员',2),(58,'娄婵',13401,'店员',3),(59,'邱馨',10605,'店员',4),(60,'季柔',8290,'店员',5),(61,'晨',6293,'店员',1),(62,'鲁芝',10133,'店员',2),(63,'虞淳月',7111,'店员',3),(64,'田吉',6767,'店员',4),(65,'米茜丽',10346,'店员',5),(66,'孟芸',19373,'店员',1),(67,'金奇娜',16692,'店员',2),(68,'潘风',11854,'店员',3),(69,'章乐香',11997,'店员',4),(70,'邱园羽',6323,'店员',5),(71,'姚君德',19258,'店员',1),(72,'明梦栋',13679,'店员',2),(73,'朱淑凡',5286,'店员',3),(74,'项吉君',6261,'店员',4),(75,'邵菁浩',7052,'店员',5),(76,'朱亮玉',8006,'店员',1),(77,'方树朋',10632,'店员',2),(78,'凌欣柔',12801,'店员',3),(79,'傅仪琳',13329,'店员',4),(80,'平彤依',17403,'店员',5),(81,'雷佩妍',16370,'店员',1),(82,'明行兰',10905,'店员',2),(83,'范依菲',15454,'店员',3),(84,'窦希瑛',12932,'店员',4),(85,'沈婷',16151,'店员',5),(86,'茅允',19739,'店员',1),(87,'殷维倩',9490,'店员',2),(88,'徐源',14708,'店员',3),(89,'高荔',18756,'店员',4),(90,'姜筠泰',16435,'店员',5),(91,'成风',12368,'店员',1),(92,'闵嘉亨',10064,'店员',2),(93,'李悦雨',6977,'店员',3),(94,'邬凤婕',6213,'店员',4),(95,'湛雪玲',14012,'店员',5),(96,'郭英琴',10555,'店员',1),(97,'于贞',13297,'店员',2),(98,'云珠瑾',14391,'店员',3),(99,'顾弘朗',13904,'店员',4);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;

#
# Structure for table "staff"
#

DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `S_jobNumber` int(11) NOT NULL DEFAULT '0' COMMENT '工号',
  `S_username` int(11) NOT NULL DEFAULT '0' COMMENT '用户名',
  `S_password` int(11) NOT NULL DEFAULT '0' COMMENT '密码',
  `S_name` varchar(255) NOT NULL DEFAULT '' COMMENT '名字',
  `S_gender` varchar(255) NOT NULL DEFAULT '' COMMENT '性别',
  `S_stat` varchar(255) DEFAULT NULL COMMENT '员工状态',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COMMENT='员工表';

#
# Data for table "staff"
#

/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,1001,9834,123456,'曹宜','男','离职'),(2,1002,5800,123457,'庞眉','女','在职'),(3,1003,6231,123458,'卢钊颖','男','在职'),(4,1004,4264,123459,'李兰莹','女','在职'),(5,1005,9510,123460,'唐镇霄','男','在职'),(6,1006,9237,123461,'李妤','女','在职'),(7,1007,9929,123462,'柏思纯','男','在职'),(8,1008,2259,123463,'鲁泽咏','女','在职'),(9,1009,8367,123464,'费惠嘉','男','离职'),(10,1010,9131,123465,'伍夕允','女','在职'),(11,1011,4950,123466,'徐娅真','男','在职'),(12,1012,4684,123467,'蓝昭函','女','在职'),(13,1013,7293,123468,'昌月娜','男','在职'),(14,1014,4095,123469,'卞腾怡','女','在职'),(15,1015,1155,123470,'尤冠言','男','在职'),(16,1016,3112,123471,'毕栋希','女','在职'),(17,1017,1789,123472,'臧环芸','男','离职'),(18,1018,1860,123473,'平梦','女','在职'),(19,1019,8832,123474,'冯珍楠','男','在职'),(20,1020,3452,123475,'葛惠固','女','在职'),(21,1021,5940,123476,'阮希','男','在职'),(22,1022,9272,123477,'卫冰','女','在职'),(23,1023,1819,123478,'华悦','男','在职'),(24,1024,7626,123479,'花德冰','女','在职'),(25,1025,7788,123480,'蔡娴素','男','离职'),(26,1026,3120,123481,'汤琬珍','女','在职'),(27,1027,5236,123482,'米融启','男','在职'),(28,1028,7440,123483,'闵融奇','女','在职'),(29,1029,3112,123484,'计华凡','男','在职'),(30,1030,3925,123485,'纪镇航','女','在职'),(31,1031,5840,123486,'韩丽','男','在职'),(32,1032,7130,123487,'祁琴育','女','在职'),(33,1033,4554,123488,'戴瑶可','男','离职'),(34,1034,3580,123489,'窦嘉聪','女','在职'),(35,1035,5606,123490,'郑萱克','男','在职'),(36,1036,2637,123491,'邱维','女','在职'),(37,1037,2671,123492,'熊茜','男','在职'),(38,1038,3491,123493,'周香嘉','女','在职'),(39,1039,3613,123494,'喻蓓','男','在职'),(40,1040,9615,123495,'柳莎朗','女','在职'),(41,1041,2514,123496,'汪娅弘','男','离职'),(42,1042,8008,123497,'邬佳','女','在职'),(43,1043,7954,123498,'彭启','男','在职'),(44,1044,9220,123499,'童婉全','女','在职'),(45,1045,6863,123500,'郑姣固','男','在职'),(46,1046,1518,123501,'乐秀','女','在职'),(47,1047,8689,123502,'王芳露','男','在职'),(48,1048,8221,123503,'于惠斌','女','在职'),(49,1049,2976,123504,'禹娟昭','男','离职'),(50,1050,8425,123505,'平秀瑗','女','在职'),(51,1051,5556,123506,'凤月','男','在职'),(52,1052,2414,123507,'倪淳悦','女','在职'),(53,1053,9717,123508,'席韵晨','男','在职'),(54,1054,2845,123509,'盛滢嫣','女','在职'),(55,1055,3573,123510,'邱雨羽','男','在职'),(56,1056,3138,123511,'郭淑琳','女','在职'),(57,1057,6673,123512,'凌璐','男','离职'),(58,1058,2086,123513,'娄婵','女','在职'),(59,1059,2847,123514,'邱馨','男','在职'),(60,1060,9038,123515,'季柔','女','在职'),(61,1061,3771,123516,'晨','男','在职'),(62,1062,9446,123517,'鲁芝','女','在职'),(63,1063,9619,123518,'虞淳月','男','在职'),(64,1064,8774,123519,'田吉','女','在职'),(65,1065,1115,123520,'米茜丽','男','离职'),(66,1066,4637,123521,'孟芸','女','在职'),(67,1067,9186,123522,'金奇娜','男','在职'),(68,1068,7419,123523,'潘风','女','在职'),(69,1069,4409,123524,'章乐香','男','在职'),(70,1070,1333,123525,'邱园羽','女','在职'),(71,1071,6127,123526,'姚君德','男','在职'),(72,1072,1576,123527,'明梦栋','女','在职'),(73,1073,8311,123528,'朱淑凡','男','离职'),(74,1074,1985,123529,'项吉君','女','在职'),(75,1075,5009,123530,'邵菁浩','男','在职'),(76,1076,5517,123531,'朱亮玉','女','在职'),(77,1077,6998,123532,'方树朋','男','在职'),(78,1078,4835,123533,'凌欣柔','女','在职'),(79,1079,8034,123534,'傅仪琳','男','在职'),(80,1080,5678,123535,'平彤依','女','在职'),(81,1081,7722,123536,'雷佩妍','男','离职'),(82,1082,2979,123537,'明行兰','女','在职'),(83,1083,1589,123538,'范依菲','男','在职'),(84,1084,2685,123539,'窦希瑛','女','在职'),(85,1085,1450,123540,'沈婷','男','在职'),(86,1086,1633,123541,'茅允','女','在职'),(87,1087,1609,123542,'殷维倩','男','在职'),(88,1088,9835,123543,'徐源','女','在职'),(89,1089,5166,123544,'高荔','男','离职'),(90,1090,4558,123545,'姜筠泰','女','在职'),(91,1091,5335,123546,'成风','男','在职'),(92,1092,5459,123547,'闵嘉亨','女','在职'),(93,1093,3646,123548,'李悦雨','男','在职'),(94,1094,8068,123549,'邬凤婕','女','在职'),(95,1095,1497,123550,'湛雪玲','男','在职'),(96,1096,3543,123551,'郭英琴','女','在职'),(97,1097,2170,123552,'于贞','男','离职'),(98,1098,2343,123553,'云珠瑾','女','在职'),(99,1099,8344,123554,'顾弘朗','男','在职');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;