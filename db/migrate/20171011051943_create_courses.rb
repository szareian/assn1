class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.integer :enroll_id

      t.string :course_id
      t.text :description
      # t.references :enroll
      t.timestamps null: false
    end
    add_index("courses", "enroll_id")
  end
end
