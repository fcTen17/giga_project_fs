Rails.application.routes.draw do
  get 'static_pages/home'

  namespace :api do
    resources :users, only:[:index, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#home"
end
