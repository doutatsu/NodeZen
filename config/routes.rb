NodeZen::Application.routes.draw do
  root 'application#index'
  get '*path' => 'application#index'

  # get "node/index"
  # get "node/show"
end
