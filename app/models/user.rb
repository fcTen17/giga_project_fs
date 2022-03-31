require 'open-uri'

class User < ApplicationRecord
    has_one_attached :image
    before_save :grab_image

    


    def add_imageURL(imageURL) 
        self.picture_large_url = imageURL
    end
    
    def grab_image
        
        image_url = self.picture_large_url
        IO.copy_stream(URI.open(image_url), 'destination.png')
        downloaded_image = open('destination.png')
        self.image.attach(io: downloaded_image  , filename: "portrait.jpg")
    end

    validates   :name_title, presence: true 
    validates   :name_first, presence: true   
    validates   :name_last, presence: true
    validates   :gender, presence: true
    validates   :email, presence: true
    validates   :picture_large_url, presence: true
    validates   :picture_medium_url, presence: true
    validates   :picture_thumbnail_url, presence: true
    
end