class NodePreviewLink < ActiveRecord::Migration
  def change
    add_column :nodes, :preview, :string
  end
end
