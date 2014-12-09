class SubscribeApiController < ApplicationController
  skip_before_action :verify_authenticity_token

  respond_to :html, :js

  def subscribe
    respond_to do |format|
      format.html
      format.js
    end

    # gb = Gibbon::API.new

    # gb.lists.subscribe({
    #   :id => "cb644a7fb3",
    #   :email => {:email => params[:email][:address]}
    # })

  end
end
