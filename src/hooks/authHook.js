import { useCallback, useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { apiLogin } from '../services/Api'
import { toast } from 'react-toastify'

function useAuth () {
  const [authData, setAuthData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await apiLogin(credentials)
      setAuthData(response)
      console.log(response)
      if (response && response.token && response._user) {
        toast.success('vous etes connecté')
      }
      window.localStorage.setItem('AUTH', JSON.stringify(response))
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setAuthData(null)
    toast.error('vous etes déco')
  }, [])

  useEffect(() => {
    const savedAuth = window.localStorage.getItem('AUTH')
    if (savedAuth) {
      setAuthData(JSON.parse(savedAuth))
    }
  }, [])

  useEffect(() => {
    if (authData) {
      window.localStorage.setItem('AUTH', JSON.stringify(authData))
    } else {
      window.localStorage.removeItem('AUTH')
    }
  }, [authData])

  return { authData, loading, error, login, logout }
}

const useAuthSharable = () => useBetween(useAuth)

export { useAuthSharable as useAuth }
