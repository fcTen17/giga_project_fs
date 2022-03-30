module Api
    class UsersController < ApplicationController

        def index
            @users = User.order(created_at: :desc).page(params[:page]).per(10)
            return render json: { error: 'not_found' }, status: :not_found if !@users
            render 'api/users/index', status: :ok
        end

        def create
        end
    end
end