class Api::GreetingsController < ApplicationController
  def surprise_greeting
    surprise = Greeting.find(Greeting.pluck(:id).sample)
    render json: surprise
  end
end
