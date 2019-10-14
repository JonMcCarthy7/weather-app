class OpenWeathersController < ApplicationController
    include TempConversionHelper

    def index
        result = RequestOpenWeatherApi.new(params[:zip]).call
        result = ::Serializers::OpenWeatherSerializer.serialize(result)
        render json: result
    end

end