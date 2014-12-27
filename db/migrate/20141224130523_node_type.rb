class NodeType < ActiveRecord::Migration
  def change
    add_column :nodes, :kind, :string
  end
end
