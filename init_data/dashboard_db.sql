CREATE DATABASE /*!32312 IF NOT EXISTS*/ `dashboard_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `dashboard_db`;
DROP TABLE IF EXISTS `Users`;
create table Users
(
    userid       int not null auto_increment,
    username     varchar(100) not null,
    userpassword varchar(100) null,
    usergoogleid varchar(100) null,
    primary key(userid)
);
