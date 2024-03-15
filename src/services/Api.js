import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000
})
// Add a request interceptor
api.interceptors.request.use(function (config) {
  const savedAuth = window.localStorage.getItem('AUTH')
  if (savedAuth) {
    const auth = JSON.parse(savedAuth)
    const { token } = auth
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

async function apiGetTodos () {
  const todos = await api.get('/todos')
  return todos.data
}

async function apiAddTodo (todo) {
  const reponse = await api.post('/todos', todo)
  return reponse.data
}

async function apiDeleteTodo (id) {
  const reponse = await api.delete('/todos', { data: { id } })
  return reponse.data
}

async function apiUpdateTodo (todo) {
  const reponse = await api.put('/todos', todo)
  return reponse.data
}

async function apiLogin (credentials) {
  const reponse = await api.post('/auth/login', credentials)
  return reponse.data
}

export {
  apiDeleteTodo,
  apiAddTodo,
  apiUpdateTodo,
  apiGetTodos,
  apiLogin

}
