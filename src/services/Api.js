import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

async function apiGetTodos () {
  const todos = await axios.get(API_URL + '/todos')
  return todos.data
}

async function apiAddTodo (todo) {
  const reponse = await axios.post(API_URL + '/todos', todo)
  return reponse.data
}

async function apiDeleteTodo (id) {
  const reponse = await axios.delete(API_URL + '/todos', { data: { id } })
  return reponse.data
}

async function apiUpdateTodo (todo) {
  const reponse = await axios.put(API_URL + '/todos', todo)
  return reponse.data
}

async function apiLogin (credentials) {
  const reponse = await axios.post(API_URL + '/auth/login', credentials)
  return reponse.data
}

export {
  apiDeleteTodo,
  apiAddTodo,
  apiUpdateTodo,
  apiGetTodos,
  apiLogin

}
