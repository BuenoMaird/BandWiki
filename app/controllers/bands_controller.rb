class BandsController < ApplicationController

  def index
    @bands = Band.all
    respond_to do |format|
      format.html { } #If it's html don't do anything
      format.json { render :json => @bands }
    end
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
  @band = Post.find params[:id]
    respond_to do |format|
      format.html { }
      format.json {render :json => @band}
  end

  def new
    @band = Band.new
  end

  private
  def band_params
    params.require(:band).permit(:name, :location, :members, :yearsActive, :bio, :website, :soundcloud)
  end
    
  end
  def check_if_admin
    redirect_to root_path unless @current_user.present? && @current_user.admin?
  end
end
