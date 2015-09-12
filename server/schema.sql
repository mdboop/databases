CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(5) NOT NULL AUTO_INCREMENT,
  message varchar(255) not null,
  time varchar(15) not null, 
  user_id int(5),
  room_id int(5), 
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int(5) NOT NULL AUTO_INCREMENT, 
  name varchar(20) not null, 
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int(5) NOT NULL AUTO_INCREMENT, 
  room varchar(20) not null, 
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

