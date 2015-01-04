class SubscribeApiController < ApplicationController
  skip_before_action :verify_authenticity_token

  def subscribe
    # @list_id = "cb644a7fb3"
    # gb = Gibbon::API.new

    # gb.lists.subscribe({
    #   :id => @list_id,
    #   :email => {:email => params[:email][:address]}
    # })
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: {"hi" => "bye"} }
      format.js
    end
  end
end
