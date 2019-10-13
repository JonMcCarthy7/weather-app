class CreateWeathers < ActiveRecord::Migration[6.0]
  def change
    create_table :weathers do |t|
      t.string :zip_code

      t.timestamps
    end
  end
end
