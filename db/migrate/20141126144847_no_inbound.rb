class NoInbound < ActiveRecord::Migration
  def change
    remove_column :nodes, :inbound, :string
  end
end
