class BandsController < ApplicationController

  def index
    @bands = Band.all
    if params[:scID]
      @band = Band.find_by(scID: params[:scID])
      if @band.nil?
        client = Soundcloud.new(:client_id => '9fe36ec8f8911ba5b8afa911f2cc7ef6')
        @scInfo = client.get('/users/' + params[:scID])
        @band = Band.new
        @band.scID = @scInfo.id
        @band.name = @scInfo.username
        @band.bio = @scInfo.description
        @band.location = @scInfo.country
        @band.website = @scInfo.website
        @band.soundcloud = @scInfo.permalink_url
        @band.uri = @scInfo.uri
        @band.save
        # binding.pry

      end
      respond_to do |format|
        format.html { }
        format.json {render :json => @band}
      end
    else 

      respond_to do |format|
        format.html { } #If it's html don't do anything
        format.json { render :json => @bands }
      end
    end
  end

  def create
    client = Soundcloud.new(:client_id => '9fe36ec8f8911ba5b8afa911f2cc7ef6')
    @scInfo = client.get('/users/:id')
    @band = Band.new
    @band.scID = @scInfo.id
    @band.save
  end

  def update
    band = Band.find_by(scID: params[:scID])
    band.update band_params
  end

  def destroy
    band.destroy
  end

  def edit
  end

  def show
    @band = Band.find_by(scID: params[:scID])
    if @band.nil?
      @scInfo = client.get('/users/' + params[:scID])
      @band = Band.new
      @band.scID = @scInfo.id
      @band.save
    end
    respond_to do |format|
      format.html { }
      format.json {render :json => @band}
    end
  end

  def new
    @band = Band.new
  end

  private
  def band_params
    params.require(:band).permit(:name, :location, :members, :yearsActive, :bio, :website, :soundcloud, :scID)
  end
    
  def check_if_admin
    redirect_to root_path unless @current_user.present? && @current_user.admin?
  end
end
