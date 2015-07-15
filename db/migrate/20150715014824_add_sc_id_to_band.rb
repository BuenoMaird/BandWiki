class AddScIdToBand < ActiveRecord::Migration
  def change
    add_column :bands, :scID, :string
  end
end
