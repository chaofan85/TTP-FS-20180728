class Api::StocksController < ApplicationController
  def create
    @stock = Stock.new(stock_params)
    @stock.user_id = current_user.id
    if @stock.save
      render :show
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end

  def show
    @stock = Stock.find(params[:id])
    render :show
  end

  def update
    @stock = Stock.find(params[:id])
    if @stock.update_attributes(stock_params)
      render :show
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end

  private

  def stock_params
    params.require(:stock).permit(:symbol, :company_name, :total_quantity, :purchase_price, :total_investment)
  end

end
