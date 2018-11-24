class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(email: params[:email])
    render 'api/users/show.json.jbuilder'
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(balance_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def balance_params
    params.require(:user).permit(:balance)
  end

end
