CREATE DATABASE user_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

INSERT INTO users (username, password)
VALUES ('testuser', 'password123');

INSERT INTO users (username, password)
VALUES ('user2', 'passwd456');
