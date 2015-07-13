class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create user_params
    redirect_to '/login'
  end

  def update
    user = @current_user
    user.update user_params
    redirect_to root_path
  end

  def edit
    @user = @current_user
    render :edit
  end

  def destroy
    user = @current_user
    session[:user_id] = nil
    user.destroy
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end

  def check_if_admin
    redirect_to root_path unless @current_user.present? && @current_user.admin?
  end
end
