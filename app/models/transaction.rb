class Transaction < ApplicationRecord
  validates :user_id, :stock_id, :quantity, :purchase_price, :total_price,  presence: true

  belongs_to :user,
    class_name: 'User'

  belongs_to :stock
    class_name: 'Stock'
end
