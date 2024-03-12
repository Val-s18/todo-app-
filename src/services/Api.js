import axios from 'axios'

const API_URL = 'http://localhost:3000'

async function getTodos () {
  const todos = await axios.get(API_URL + '/todos')
  return todos.data
}

async function addTodo (todo) {
  const reponse = await axios.post(API_URL + '/todos', todo)
  console.log(reponse)
}

export {
  getTodos,
  addTodo
}
