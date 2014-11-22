NodeZen::Application.routes.draw do
  root 'application#index'

  resources :node, defaults: {format: :json}, only: [:index, :show]

  get '*path' => 'application#index'
end
