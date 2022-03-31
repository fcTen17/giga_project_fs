json.users do
  json.array! @users do |user|
    json.id                     user.id
    json.name_title             user.name_title
    json.name_first             user.name_first
    json.name_last              user.name_last 
    json.email                  user.email
    json.picture_large_url      user.picture_large_url
    json.picture_medium_url     user.picture_medium_url
    json.picture_thumbnail_url  user.picture_thumbnail_url
    
    if user.image.attached?
      json.image url_for(user.image)
    else
      json.image nil
    end

  end
end