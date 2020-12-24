drop database if exists striker;
create database striker;
use striker;

create table SCHOOLS(
	ID int not null primary key auto_increment,
    NAME nvarchar(50) not null,
    ADDRESS nvarchar(100)
);

create table INFORS(
	ID int not null primary key auto_increment,
	FIRST_NAME nvarchar(50) not null,
    LAST_NAME nvarchar(50) not null,
    BIRTHDAY date not null,
    SEX varchar(6) not null,
    SCHOOL_ID int,
    constraint FK_SCHOOL foreign key (SCHOOL_ID) references SCHOOLS(ID)
);

create table ACCOUNTS (
	ID int not null primary key auto_increment,
    PASSWORD varchar(60) not null,
    EMAIL varchar(100) not null,
    AUTHORITY varchar(30) not null,
    INFOR_ID int not null,
    constraint FK_INFOR foreign key (INFOR_ID) references INFORS(ID)
);

create table LONG_SCHEDULER(
	ID int not null auto_increment,
    ACCOUNT_ID int not null,
    END_TIME date not null,
    START_TIME date not null,
    TITLE nvarchar(50) not null,
    DECRIPTION nvarchar(200),
    OFFICE nvarchar(30),
    TYPE nvarchar(20) not null,
    PRIORITY varchar(10) not null,
    COMPLETE varchar(10) not null,
    primary key (ID, ACCOUNT_ID),
    CHECK(END_TIME >= START_TIME)
);

create table SHORT_SCHEDULER(
	ID int not null auto_increment,
    ACCOUNT_ID int not null,
    START_TIME datetime not null,
    END_TIME datetime not null,
    TITLE nvarchar(50) not null,
    DECRIPTION nvarchar(200),
    LOCATION nvarchar(30),
    OFFICE nvarchar(30),
    TYPE nvarchar(20) not null,
    PRIORITY varchar(10) not null,
    COMPLETE varchar(10) not null,
    REPEAT_ROLE varchar(50) not null,
    primary key (ID, ACCOUNT_ID),
    CHECK(START_TIME <= END_TIME)
);
create table FEEDBACK(
	ID int not null auto_increment primary key,
    ACCOUNT_ID int not null,
    EMAIL varchar(100),
    FEEDBACK text
);