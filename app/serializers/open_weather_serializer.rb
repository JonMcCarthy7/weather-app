module Serializers
    class OpenWeatherSerializer
        def self.serialize(weather)
            weather_data = weather.with_indifferent_access
            Oj.dump(weather_data)

        end
    end
end