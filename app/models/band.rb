# == Schema Information
#
# Table name: bands
#
#  id          :integer          not null, primary key
#  name        :string
#  location    :string
#  members     :string
#  yearsActive :string
#  bio         :text
#  website     :string
#  soundcloud  :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  scID        :string
#

class Band < ActiveRecord::Base
end
