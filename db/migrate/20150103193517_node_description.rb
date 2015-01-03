class NodeDescription < ActiveRecord::Migration
  def change
  	change_column :nodes, :description, :text
  end
end
