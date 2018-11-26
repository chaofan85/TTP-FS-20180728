class Stock < ApplicationRecord
  validates :user_id, :symbol, :company_name, :total_quantity, :total_investment, presence: true

  belongs_to :user, class_name: 'User'

end
