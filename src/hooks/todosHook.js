import { useCallback, useEffect, useState } from 'react'
import { apiAddTodo, apiDeleteTodo, apiGetTodos, apiUpdateTodo } from '../services/Api'
import { useBetween } from 'use-between'
import { useAuth } from './authHook'

function useTodos () {
  const [todos, setTodo] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const { authData } = useAuth()

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const todosData = await apiGetTodos()
      setTodo(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [])

  const addTodo = useCallback(async (todo) => {
    try {
      setLoading(true)
      const todosData = await apiAddTodo(todo)
      setTodo(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    } finally {
      setTimeout(() => setLoading(false), 100)
    }
  }, [])

  const deleteTodo = useCallback(async (id) => {
    try {
      setLoading(true)
      const todosData = await apiDeleteTodo(id)
      setTodo(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    } finally {
      setTimeout(() => setLoading(false), 100)
    }
  }, [])

  const updateTodo = useCallback(async (todo) => {
    try {
      setLoading(true)
      const todosData = await apiUpdateTodo(todo)
      setTodo(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    } finally {
      setTimeout(() => setLoading(false), 100)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [authData])

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
