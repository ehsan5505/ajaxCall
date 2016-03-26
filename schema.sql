-- create database jsonTest;
-- drop database jsonTest;
create database std;
-- show databases;
use std;

create table users (
    `id`    int(4)  auto_increment not null primary key,
    `sid`   int(5)  not null ,
    `first` varchar(255)    not null,
    `last`  varchar(255)    not null,
    `cgpa`  float(5)        not null default 0.0,
    `batch` varchar(10)     default ''
);


insert into users
    (sid,first,last,cgpa,batch)
    VALUES (5505,"Ehsan","Rafeeque",2.4,"SP11");
insert into users 
    (sid,first,last,cgpa,batch)
    VALUES (5552,"Haris","Ahmed",3.4,"SP11");
insert into users 
    (sid,first,last,cgpa,batch)
    VALUES (5141,"Ahsan","Iqbal",3.07,"FA10");
insert into users 
    (sid,first,last,cgpa,batch)
    VALUES (5514,"Abdul Qadir","Memon",2.8,"SP11");
insert into users 
    (sid,first,last,cgpa,batch)
    VALUES (5580,"Mossidique","Iqbal",3.45,"SP11");

select "Data Added in the databases" as status;

select * from users;
