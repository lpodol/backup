require 'Sinatra'

pets = {
  0 => {
    id: 0,
    name: "Fluffy",
    type: "hamster"
  }
}
counter = 1

gets '/pets' do
  erb :index, locals: {pets: pets}
end
