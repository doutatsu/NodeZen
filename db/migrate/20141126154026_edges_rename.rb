class EdgesRename < ActiveRecord::Migration
  def change
    rename_column :nodes, :outbound, :edges
  end
end
