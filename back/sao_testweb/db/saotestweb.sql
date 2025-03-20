--复制代码到Navicat新建查询
create database if not exists saotestweb;
use saotestweb;
create table saowebtest(
    sex varchar(2) not null,  --enum('男','女')
    age int not null,
    email varchar(100) not null,
    tel varchar(15) not null,
    acg varchar(20) not null,
    interests varchar(200) not null,
    --set('刀剑神域第一季','刀剑神域第二季','刀剑神域第三季','刀剑神域剧场版序列之争','刀剑神域外传','刀剑神域记忆碎片','刀剑神域ARS/UB','刀剑神域IF','没看过，没听过'),
    textarea text not null
)engine=InnoDB default charset=utf8  --engine=InnoDB:指定使用InnoDB作为表的存储引擎,数据库默认的存储引擎,处理大容量数据。