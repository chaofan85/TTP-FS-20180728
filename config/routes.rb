Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :stocks, only: [:create, :show, :update]
    resources :transactions, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end
end
