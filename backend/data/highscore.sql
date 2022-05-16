create table game(
id integer generated always as identity,
title character varying(50) NOT NULL,
description varchar (500) NOT NULL,
genre character varying(50) NOT NULL,
lanseringsår char (4) NOT NULL,
image_url character varying(255) NOT NULL,
url_slug character(50) NOT NULL,
	primary key (id),
	UNIQUE (url_slug)
);


create table score(
id integer generated always as identity,
first_name character varying(50) NOT NULL,
last_name character varying(50) NOT NULL,
date DATE not null,
score BIGINT not null,
game_id INTEGER NOT NULL,
FOREIGN KEY (game_id)
REFERENCES game(id),
	primary key (id)

);




