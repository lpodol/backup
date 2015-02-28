require 'pry'
require_relative './lib/connection'
require_relative './lib/artist'
require_relative './lib/album'
require_relative './lib/song'


broadcast = Artist.create({
  name: "Broadcast",
  image_url: "http://i.guim.co.uk/static/w-620/h--/q-95/sys-images/Music/Pix/pictures/2011/1/14/1295020502889/Broadcasts-Trish-Keenan--007.jpg",
})

noise_made_by_people = Album.create({
  name: "The Noise Made By People",
  artist_id: broadcast.id,
  image_url: "https://warpnet-media.s3.amazonaws.com/bf2966c7fbe85aac51712e3e67684f6d1785c46381f3cf73d3308d65v"
})

Song.create({
  name: "Come on Let's Go",
  album_id: noise_made_by_people.id,
  video_url: "http://youtu.be/Zw5ztuhEat4"
})
