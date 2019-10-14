require 'rails_helper'

RSpec.describe Weather, type: :model do
  it "is valid with valid attribut" do
    expect(build(:weather)).to be_valid
  end

  it "is not valid without a title" do
    expect(build(:weather, zip_code: "")).to_not be_valid
  end
end
