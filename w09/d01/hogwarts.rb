require 'sinatra'

students = {
  0 => {
    id: 0,
    name: "Harry Potter",
    age: "First Year",
    spell: "Accio"}
}
counter = 1

get '/students' do
  erb :hogwarts_index, locals: {students: students}
end

get '/search' do
  erb :hogwarts_search, locals: {students: students}
end

post '/student' do
  newstudent = {
    id: counter,
    name: params["name"],
    age: params["age"],
    spell: params["spell"]
  }
  students[counter] = newstudent
  counter +=1
  redirect '/students'
end

get '/student/:id' do
  thisstudent = students[params[:id].to_i] #comes through as an integer.
  erb :hogwarts_show, locals: {thisstudent: thisstudent}
end

put '/student/:id' do
  student=students[params[:id].to_i]
  student[:name] = params["newstudent"]
  redirect '/students'
end

delete '/student/:id' do
  students.delete(params[:id].to_i)
  redirect '/students'
end
