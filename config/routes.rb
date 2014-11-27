NodeZen::Application.routes.draw do
  root 'static_pages#home'
  # root 'application#index'

  resources :node, defaults: {format: :json}, only: [:index, :show]

  get '*path' => 'application#index'
end
