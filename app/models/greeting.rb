class Greeting < ApplicationRecord
  validates :text, presence: true, allow_blank: false
end
