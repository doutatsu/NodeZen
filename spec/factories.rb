FactoryGirl.define do

  factory :node do
    sequence(:title) { |n| "title Number_#{n}"}
    description      "Some cool description"
    link             "www.example.com"
  end
end