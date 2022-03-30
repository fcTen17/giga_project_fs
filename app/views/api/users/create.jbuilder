json.user do
  json.name_title             @user.name_title
  json.name_first             @user.name_first  
  json.name_last              @user.name_last
  json.gender                 @user.gender
  json.email                  @user.email
  json.picture_large_url      @user.picture_large_url
  json.picture_medium_url     @user.picture_medium_url
  json.picture_thumbnail_url  @user.picture_thumbnail_url

  json.image    url_for(@user.image) if @user.image.attached?
end

