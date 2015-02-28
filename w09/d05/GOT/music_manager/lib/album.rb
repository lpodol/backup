require 'active_record'

class Album < ActiveRecord::Base
  def artist
    Artist.find_by({id: self.artist_id})
  end
  def songs
    Song.where({album_id: self.id})
  end
end
