class Enroll < ActiveRecord::Base
  has_many :students #, class_name: 'students', foreign_key: "student_id"
  has_many :courses #, class_name: 'courses', foreign_key: "course_id"
end
