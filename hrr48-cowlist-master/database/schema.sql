CREATE DATABASE farm;

USE farm;

CREATE TABLE IF NOT EXISTS cows (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(40) NOT NULL UNIQUE,
  description varchar(320) NOT NULL,
  PRIMARY KEY (ID)
)