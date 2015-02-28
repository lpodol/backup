CREATE TABLE songs (
id INTEGER PRIMARY KEY,
title TEXT,
image_url TEXT,
album_id INTEGER REFERENCES albums
);

CREATE TABLE albums (
id INTEGER PRIMARY KEY,
title TEXT,
image_url TEXT,
artist_id INTEGER REFERENCES artists
);

CREATE TABLE artists (
id INTEGER PRIMARY KEY,
name TEXT
video_url TEXT
);
