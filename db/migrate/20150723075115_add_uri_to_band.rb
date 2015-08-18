class AddUriToBand < ActiveRecord::Migration
  def change
    add_column :bands, :uri, :string
  end
end
