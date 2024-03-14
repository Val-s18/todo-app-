import { useCallback, useEffect, useState } from 'react'
import { apiAddTodo, apiDeleteTodo, apiGetTodos, apiUpdateTodo } from '../services/Api'
import { useBetween } from 'use-between'

function useTodos () {
  const [todos, setTodo] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const todosData = await apiGetTodos()
      setTodo(todosData)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const addTodo = useCallback(async (todo) => {
    try {
      const todosData = await apiAddTodo(todo)
      setTodo(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const deleteTodo = useCallback(async (id) => {
    try {
      const todosData = await apiDeleteTodo(id)
      setTodo(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const updateTodo = useCallback(async (todo) => {
    try {
      const todosData = await apiUpdateTodo(todo)
      setTodo(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return {
    todos,
    loading,
    error,
    getData,
    addTodo,
    deleteTodo,
    updateTodo
  }
}

const useTodosSharable = () => useBetween(useTodos)
export { useTodosSharable as useTodos }
