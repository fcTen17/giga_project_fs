require 'open-uri'

class User < ApplicationRecord

    validates   :name_title, presence: true 
    validates   :name_first, presence: true   
    validates   :name_last, presence: true
    validates   :gender, presence: true
    validates   :email, presence: true
    validates   :picture_large_url, presence: true
    validates   :picture_medium_url, presence: true
    validates   :picture_thumbnail_url, presence: true
    
end