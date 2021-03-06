class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.string :symbol, null: false
      t.integer :quantity, null: false
      t.string :purchase_price, null: false
      t.string :total_price, null: false

      t.timestamps
    end
    add_index :transactions, :user_id
  end
end
