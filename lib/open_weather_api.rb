# frozen_string_literal: true

module OpenWeatherApi
  def get_weather(zip_code)
    result = HTTParty.get('https://api.openweathermap.org/data/2.5/weather' + "?zip=#{zip_code}" + "&appid=#{Rails.application.credentials.open_weather_api_key}")

    if result.success?
      result.body
    else
      result
    end

    # Convert the data into a ruby object before displaying data
    # JSON.parse(response.body).with_indifferent_access
  end
end
