# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TempConversionHelper, type: :helper do
  describe 'tempatue conversion methods' do
    describe 'kalvin_to_fahrenheit' do
      it 'converts freezing tempature of kelvin to freezing tempature o fahrenheit' do
        expect(TempConversionHelper.kalvin_to_fahrenheit(273.15)).to eq(32)
      end
    end

    describe 'fahrenheit_to_celcius' do
      it 'converts freezing tempature of fahrenheit to freezing tempature o celcius' do
        expect(TempConversionHelper.fahrenheit_to_celcius(32)).to eq(0)
      end
    end

    describe 'average_tempature' do
      it 'finds the average in an array of tempatures' do
        array = [30, 20, 10]
        expect(TempConversionHelper.average_tempature(array)).to eq(20)
      end
    end
    
  end
end
