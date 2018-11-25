json.extract! user, :id, :username, :email, :balance

json.stocks do
  json.array! user.stocks do |stock|
    json.id stock.id
    json.symbol stock.symbol
    json.companyName stock.company_name
    json.totalQuantity stock.total_quantity
    json.totalInvestment stock.total_investment
  end
end
