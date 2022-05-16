
insert into game(
	title ,
description ,
genre ,
lanseringsar,
image_url ,
url_slug 
)values
(
    'Tetris',
    'A tetris is a tile-matching puzzle game.',
    'Puzzle',
	'1980',
	'https://via.placeholder.com/150x150?text=Tetris',
	'tetris'
	),
	(
	'Pac-Man',
    'Pac-Man is an action maze chase video game.',
    'labyrinth',
	'1982',
	'https://via.placeholder.com/150x150?text=pac-man',
	'pac-man'),
	(
	'Asteroids', 
    'Asteroids is a an arcade space shooter where the player destroys astroids and saucers.',
    'shoot em up',
	'1980',
	'https://via.placeholder.com/150x150?text=asteroids',
	'Asteroids'
	),
	(
	'Space invaders',
    'Space Invaders is a fixed shooter in which the player moves a laser cannon horizontally across the bottom of the screen and fires at aliens overhead.',
    'arcade',
	'1980',
	'https://via.placeholder.com/150x150?text=space-invaders',
	'space-invaders'
	),
	(
	'Donkey Kong',
    'Donkey Kong is a large, powerful muscular ape in appearance with a red tie that sports his initials.',
    'arcade',
	'1980',
	'https://via.placeholder.com/150x150?text=donkey-kong',
	'donkey-kong'
	);


insert into score(
	first_name ,
last_name ,
date,
	score,
	game_id
)values
(
'John',
'Doe',
'2021-11-12 11:23',
558982,
1
	),
	(
'Jane',
'Doe',
'2021-04-06 05:40', 
658982,
2	),
	(
'Jim',
'Doe',
'2021-04-10 19:40',
 999982,¨
 3	),
 	(
'Joel',
'Doe',
'2022-04-10 19:40',
 99112982,
 4	
 );

    
