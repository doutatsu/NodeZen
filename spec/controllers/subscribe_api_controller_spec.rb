require 'rails_helper'

RSpec.describe SubscribeApiController, :type => :controller do

  describe "GET subscribe" do
    it "returns http success" do
      get :subscribe
      expect(response).to have_http_status(:success)
    end
  end

end
