NodeZen::Application.routes.draw do
  root 'static_pages#home'

 if Rails.env.development?
  resources :node, defaults: {format: :json}, only: [:index, :show]

  get '*path' => 'application#index'
 end
end
