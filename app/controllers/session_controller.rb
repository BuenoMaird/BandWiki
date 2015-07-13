class SessionController < ApplicationController
  def new
  end

  def create
  user = User.find_by :name => params[:name]
    if user.present? && user.authenticate( params[:password] )  
      session[:user_id] = user.id
      # user.ip_address = request.remote_ip
      #This will get uncommented when it goes live. It resets the lat/lon on session based on the position of the users ip address.
      user.save 
      redirect_to root_path
    else
      flash[:notice] = "Invalid login, please try again"
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
