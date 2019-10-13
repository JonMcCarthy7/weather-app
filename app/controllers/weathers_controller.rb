# frozen_string_literal: true

class WeathersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    weathers = Weather.order(created_at: :desc)
    render json: weathers, status: :ok
  end

  def create
    weather = Weather.create!(weathers_params)
    render json: weather, status: :created
  end

  private

  def weathers_params
    params.require(:weather).permit(:zip_code)
  end
end
