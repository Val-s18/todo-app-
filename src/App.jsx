import './App.css'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Title from './components/Title'
import { useEffect, useState } from 'react'
import { addTodo, getTodos } from './services/Api'
import AddTodo from './components/AddTodo'

function App () {
  const [todos, setTodo] = useState([])

  useEffect(() => {
    const getData = async () => {
      const todosData = await getTodos()
      setTodo(todosData)
    }
    getData()
  }, [])

  const handleAddTodo = async (todo) => {
    await addTodo(todo)
  }
  return (
    <>
      <Header />
      {/* <Clock interval='1000' /> */}
      <Title />
      <TodoList todos={todos} />
      <AddTodo
        onAddTodo={handleAddTodo}
      />
    </>
  )
}

export default App
