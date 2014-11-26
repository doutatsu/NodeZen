class NodeController < ApplicationController
  def index
    render json: Node.all
  end

  def show
    render json: Node.find(params[:id])
  end
end
