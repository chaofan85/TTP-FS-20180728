json.extract! user, :id, :username, :email, :balance

json.stocks do
  user.stocks.each do |stock|
    json.set! stock.symbol do
      json.id stock.id
      json.symbol stock.symbol
      json.company_name stock.company_name
      json.total_quantity stock.total_quantity
      json.total_investment stock.total_investment
    end
  end
end
