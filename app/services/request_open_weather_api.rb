# frozen_string_literal: true

class RequestOpenWeatherApi
  BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
  API_KEY = "&appid=#{Rails.application.credentials.open_weather_api_key}"

  def initialize(zip_code)
    @zip_code = zip_code
  end

  def call
    result = HTTParty.get(BASE_URL + "?zip=#{@zip_code},us" + API_KEY)

    if result.success?
      # Convert the data into a ruby object before displaying data
      JSON.parse(result.body).with_indifferent_access
    else
      result
    end
  end
end
