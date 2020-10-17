CREATE DATABASE movieDirectory;

USE movieDirectory;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(225),
  year varchar(225),
  runtime varchar(225),
  score int,
  rating int,
  watched boolean NOT NULL,
  PRIMARY KEY (ID)
)