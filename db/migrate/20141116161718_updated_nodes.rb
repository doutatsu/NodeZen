class UpdatedNodes < ActiveRecord::Migration
  def change
    add_column :nodes, :inbound, :string
    add_column :nodes, :outbound, :string
  end
end
