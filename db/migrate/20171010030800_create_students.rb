class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.integer :enroll_id

      t.integer :student_id
      t.string :name
      t.string :email

      # t.references :enroll
      t.timestamps null: false
    end
    add_index("students", "enroll_id")
  end
end
