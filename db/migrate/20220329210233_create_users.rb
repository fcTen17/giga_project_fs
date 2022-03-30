class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name_title
      t.string :name_first
      t.string :name_last
      t.string :gender
      t.string :email
      t.string :picture_large_url
      t.string :picture_medium_url
      t.string :picture_thumbnail_url

      t.timestamps
    end
  end
end
