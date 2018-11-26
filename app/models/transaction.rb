class Transaction < ApplicationRecord
  validates :user_id, :symbol, :quantity, :purchase_price, :total_price,  presence: true

  belongs_to :user, class_name: 'User'
end
