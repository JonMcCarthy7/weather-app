# frozen_string_literal: true

module TempConversionHelper
  def self.kalvin_to_fahrenheit(kalvin)
    ((((kalvin - 273.15) * 9) / 5) + 32).round()
  end

  def self.fahrenheit_to_celcius(fahrenheit)
    ((fahrenheit - 32) * 5 / 9).round()
  end

  def self.average_tempature(temps_arr)
    (temps_arr.sum / temps_arr.size.to_f).round()
  end
end
