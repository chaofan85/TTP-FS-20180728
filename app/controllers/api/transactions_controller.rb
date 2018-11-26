class Api::TransactionsController < ApplicationController
  def create
    @transaction = Transaction.new(transaction_params)
    @transaction.user_id = current_user.id

    if @transaction.save
      render :show
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  def show
    @transaction = Transaction.find(params[:id])
    render :show
  end


  private

  def transaction_params
    params.require(:transaction).permit(:symbol, :quantity, :purchase_price, :total_price)
  end

end
