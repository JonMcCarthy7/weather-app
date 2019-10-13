# frozen_string_literal: true

class Weather < ApplicationRecord
  require 'httparty'

  validates_format_of :zip_code,
                      with: /\A\d{5}-\d{4}|\A\d{5}\z/,
                      message: 'Zip code format should be 12345 or 12345-1234',
                      allow_blank: false


end
