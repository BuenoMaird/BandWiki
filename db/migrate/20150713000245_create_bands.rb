class CreateBands < ActiveRecord::Migration
  def change
    create_table :bands do |t|
      t.string :name
      t.string :location
      t.string :members
      t.string :yearsActive
      t.text :bio
      t.string :website
      t.string :soundcloud

      t.timestamps null: false
    end
  end
end
