NodeZen::Application.routes.draw do
  post 'subscribe_api/subscribe' => 'subscribe_api#subscribe'

  root 'static_pages#home'

 # if Rails.env.development?
  resources :node, defaults: {format: :json}, only: [:index, :show]

  get '*path' => 'application#index'
 # end
end
