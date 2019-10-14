module Serializers
    class OpenWeatherSerializer
        def self.serialize(weather)
            weather_data = weather.with_indifferent_access
            weather_data[:fahrenheit] = TempConversionHelper.kalvin_to_fahrenheit(weather[:main][:temp])
            weather_data[:celcius] = TempConversionHelper.fahrenheit_to_celcius(weather_data[:fahrenheit])
            weather_data[:average] = TempConversionHelper.average_tempature([weather[:main][:temp_max], weather[:main][:temp_min]])
            weather_data[:average_in_f] = TempConversionHelper.kalvin_to_fahrenheit(weather_data[:average])
            weather_data[:temp_max] = TempConversionHelper.kalvin_to_fahrenheit(weather[:main][:temp_max])
            weather_data[:temp_min] = TempConversionHelper.kalvin_to_fahrenheit(weather[:main][:temp_min])


            Oj.dump(weather_data)

        end
    end
end