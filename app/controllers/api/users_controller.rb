module Api
  class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index    
      @users = User.order(created_at: :desc).page(params[:page]).per(10)
  
      return render json: { error: 'not_found' }, status: :not_found if !@users
      render 'api/users/index', status: :ok
    end

    def create
      @user = User.new(user_params)
      @user.add_imageURL(@user.picture_large_url)
      
      if @user.save
          render 'api/users/create'
      else
          render json: {
          success: false
          }
      end
    end

    def search
      @users = User.where("name_first LIKE ? ", "%" + params[:q] + "%" ).or(User.where("name_last LIKE ? ", "%" + params[:q] + "%" ))
    end

    private

      def user_params
        params.require(:user).permit(:name_title, :name_first, :name_last, :gender, :email, :picture_large_url, :picture_medium_url, :picture_thumbnail_url, :search)
      end
    
  end
end