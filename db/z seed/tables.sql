DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS elbows;
DROP TABLE IF EXISTS gloves;
DROP TABLE IF EXISTS shoulder_pads;
DROP TABLE IF EXISTS heads;
DROP TABLE IF EXISTS shafts;
DROP TABLE IF EXISTS helmets;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    password VARCHAR(50),
    profile_pic TEXT,
    is_admin BOOLEAN
    
);
CREATE TABLE users_login (
	user_login_id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	hash TEXT
);

CREATE TABLE elbows (
    id SERIAL PRIMARY KEY,
    brand text,
    name text,
    used boolean,
    price int,
    author_id INTEGER REFERENCES users(id)
);

CREATE TABLE gloves (
    id SERIAL PRIMARY KEY,
    brand text,
    name text,
    used boolean,
    price int,
    author_id INTEGER REFERENCES users(id)
);

CREATE TABLE shoulder_pads (
    id SERIAL PRIMARY KEY,
    brand text,
    name text,
    used boolean,
    price int,
    author_id INTEGER REFERENCES users(id)
);

CREATE TABLE heads (
    id SERIAL PRIMARY KEY,
    brand text,
    name text,
    used boolean,
    price int,
    author_id INTEGER REFERENCES users(id)
);

CREATE TABLE shafts (
    id SERIAL PRIMARY KEY,
    brand text,
    name text,
    used boolean,
    price int,
    author_id INTEGER REFERENCES users(id)
);

CREATE TABLE helmets (
    id SERIAL PRIMARY KEY,
    brand text,
    name text,
    used boolean,
    price int,
    author_id INTEGER REFERENCES users(id)
);

