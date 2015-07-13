# == Route Map
#
#    Prefix Verb   URI Pattern               Controller#Action
#      root GET    /                         users#new
#     users GET    /users(.:format)          users#index
#           POST   /users(.:format)          users#create
#  new_user GET    /users/new(.:format)      users#new
# edit_user GET    /users/:id/edit(.:format) users#edit
#      user GET    /users/:id(.:format)      users#show
#           PATCH  /users/:id(.:format)      users#update
#           PUT    /users/:id(.:format)      users#update
#           DELETE /users/:id(.:format)      users#destroy
#     bands GET    /bands(.:format)          bands#index
#           POST   /bands(.:format)          bands#create
#  new_band GET    /bands/new(.:format)      bands#new
# edit_band GET    /bands/:id/edit(.:format) bands#edit
#      band GET    /bands/:id(.:format)      bands#show
#           PATCH  /bands/:id(.:format)      bands#update
#           PUT    /bands/:id(.:format)      bands#update
#           DELETE /bands/:id(.:format)      bands#destroy
#     pages GET    /pages(.:format)          pages#index
#           POST   /pages(.:format)          pages#create
#  new_page GET    /pages/new(.:format)      pages#new
# edit_page GET    /pages/:id/edit(.:format) pages#edit
#      page GET    /pages/:id(.:format)      pages#show
#           PATCH  /pages/:id(.:format)      pages#update
#           PUT    /pages/:id(.:format)      pages#update
#           DELETE /pages/:id(.:format)      pages#destroy
#     login GET    /login(.:format)          session#new
#           POST   /login(.:format)          session#create
#           DELETE /login(.:format)          session#destroy
#

Rails.application.routes.draw do


  root :to => 'pages#index' #This is where the backbone app lines

  resources :users, :bands, :pages

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
