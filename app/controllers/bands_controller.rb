class BandsController < ApplicationController

  def index
  end

  def create
    @band = Band.create
  end

  def update
    band.update
  end

  def destroy
    band.destroy
  end

  def edit
  end

  def show
  end

  def new
    @band = Band.new
  end

  private
  def check_if_admin
    redirect_to root_path unless @current_user.present? && @current_user.admin?
  end
end
