-- crear db
DROP DATABASE IF EXISTS mystore;
CREATE DATABASE mystore;

-- usar
USE mystore;

DROP TABLE IF EXISTS user;

-- Crear tabla user
CREATE TABLE user (
	id VARCHAR(32),
	username VARCHAR(32) NOT NULL UNIQUE,
	name VARCHAR(32) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE `mystore`.`user` (
	`id` VARCHAR(32) NOT NULL , 
	`username` VARCHAR(32) NOT NULL , 
	`name` VARCHAR(64) NOT NULL , 
	`email` VARCHAR(128) NOT NULL , 
	`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
	PRIMARY KEY (`id`(32))
)

-- Crear tabla auth
DROP TABLE IF EXISTS auth;

CREATE TABLE auth (
	id VARCHAR(32),
	username VARCHAR(32) NOT NULL UNIQUE,
	password VARCHAR(64) NOT NULL UNIQUE,
	PRIMARY KEY (id)
);

-- Crear tabla auth
DROP TABLE IF EXISTS course;

CREATE TABLE course (
	id VARCHAR(32),
	course_name VARCHAR(32) NOT NULL UNIQUE,
	category VARCHAR(64) NOT NULL,
	description VARCHAR(128) NOT NULL,
	hours INT NOT NULL,
	classes INT NOT NULL,
	create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE user_course (
	user_id VARCHAR(32) NOT NULL,
	course_id VARCHAR(32) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (course_id) REFERENCES course(id),
	PRIMARY KEY(user_id, course_id)
);
