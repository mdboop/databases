CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(5),
  message varchar(255),
  time varchar(15), 
  user_id int(5),
  room_id int(5)
);

CREATE TABLE users (
  id int(5), 
  name varchar(20)
);

CREATE TABLE rooms (
  id int(5), 
  room varchar(20)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

