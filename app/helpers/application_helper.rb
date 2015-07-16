module ApplicationHelper
  def intellinav
    nav = ''
    if @current_user.present? && @current_user.admin?
      nav+= '<li>' + link_to('Show users', users_path) + '</li>'
    end
    if @current_user.present?
      nav += '<li>' + link_to("Edit Profile", edit_user_path(@current_user), :class => 'active' ) + '</li>'
      nav += '<li>' + link_to("Log Out #{@current_user.name}", login_path, :method => :delete) + '</li>'
      nav += '<li>' + link_to('Delete', @current_user, :method => :delete, data: {confirm: "Are you sure you want to delete your profile?"}) + '</li>'
      nav += '<li>' + link_to('home', root_path) + '</li>'

    else
      nav += '<li>' + link_to('Sign Up', new_user_path, :class => 'active' ) + '</li> '
      nav += '<li>' + link_to('Login', login_path ) + '</li>'
      nav += '<li>' + link_to('home', root_path) + '</li>'
    end

    nav
  end
end
