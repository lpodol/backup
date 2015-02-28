require 'sinatra'
require 'sinatra/reloader'
require_relative './lib/connection'
require_relative './lib/artist'
require_relative './lib/album'
require 'pry'


after do
  ActiveRecord::Base.connection.close
end

get("/") do
  erb(:index)
end

get("/albums") do
  erb(:"characters/index", { locals: { albums: Album.all(), } })
end

get("/albums/new") do
  erb(:"albums/new", { locals: { albums: Artist.all(), } })
end

post("/albums") do
  album_hash = {
    name: params["name"],
    image_url: params["url"],
    artist_id: params["artist_id"]
  }

  Album.create(album_hash)

  erb(:"albums/index", { locals: { albums: Album.all() } })
end

get("/albums/:id") do
  album = Album.find_by({id: params[:id]})
  erb(:"albums/show", { locals: { album: album } })
end

get("/albums/:id/edit") do
  album = Album.find_by({id: params[:id]})
  erb(:"albums/edit", { locals: { album: album, artists: Artist.all() } })
end

put("/albums/:id") do
  album_hash = {
    name: params["name"],
    image_url: params["url"],
    artist_id: params["artist_id"]
  }

  album = Album.find_by({id: params[:id]})
  album.update(album_hash)

  erb(:"album/show", { locals: { album: album } })
end

delete("/albums/:id") do
  album = Album.find_by({id: params[:id]})
  album.destroy

  redirect "/albums"
end

get("/artists") do

  erb(:"artists/index", { locals: { artists: Artist.all() } })
end

get("/artists/:id") do
  artist = Artist.find_by({id: params[:id]})
  erb(:"artists/show", { locals: { artist: artist } })
end
