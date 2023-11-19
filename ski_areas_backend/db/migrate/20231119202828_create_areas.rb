class CreateAreas < ActiveRecord::Migration[7.0]
  def change
    create_table :areas do |t|
      t.string :name
      t.text :description
      t.text :logo
      t.integer :vertical
      t.boolean :epic
      t.boolean :ikon
      t.boolean :other

      t.timestamps
    end
  end
end
