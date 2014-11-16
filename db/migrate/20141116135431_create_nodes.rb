class CreateNodes < ActiveRecord::Migration
  def change
    create_table :nodes do |t|
      t.string :title
      t.string :description
      t.string :link
      t.string :tags

      t.timestamps
    end
  end
end
