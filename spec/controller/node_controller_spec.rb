require 'rails_helper'

RSpec.describe NodeController, :type => :controller do
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    # Refactor this to cheack all nodes in one go including dates. Current problem - dates are in different format in JSON and Active Record
    it "return correct nodes" do
      node1, node2 = Node.create!, Node.create!

      get :index

      responseNode1 = JSON.parse(response.body).first.except("updated_at", "created_at")
      responseNode2 = JSON.parse(response.body).last.except("updated_at", "created_at")

      expect(responseNode1).to eq(JSON.parse(node1.to_json).except("updated_at","created_at"))
      expect(responseNode2).to eq(JSON.parse(node2.to_json).except("updated_at","created_at"))
    end
  end
  describe "GET #show" do
    before do
      @node1 = Node.create!
    end
    it "responds successfully with an HTTP 200 status code" do
      get(:show, {'id' => @node1.id})
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "returns correct node" do
      get(:show, {'id' => @node1.id})
      responseNode1 = JSON.parse(response.body).first.last
      expect(responseNode1).to eq(JSON.parse(@node1.to_json)['id'])
    end
  end
end