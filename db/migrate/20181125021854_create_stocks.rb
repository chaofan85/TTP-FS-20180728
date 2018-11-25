class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.integer :user_id, null: false
      t.string :symbol, null: false
      t.string :company_name, null: false
      t.integer :total_quantity, null: false
      t.decimal :total_investment, :precision => 11, :scale => 2, null: false

      t.timestamps
    end
    add_index :stocks, :user_id
  end
end
