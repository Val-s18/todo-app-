import { useCallback, useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { apiSignUp } from '../services/Api'
import { toast } from 'react-toastify'

function useSignUp () {
  const [SignData, setSignData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const signUp = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await apiSignUp(credentials)
      setSignData(response)
      console.log(response)
      if (response && response.token && response._user) {
        toast.success('vous etes Inscrit')
      }
      window.localStorage.setItem('AUTH', JSON.stringify(response))
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const SignUpOut = useCallback(() => {
    setSignData(null)
    toast.error('vous etes déconnecté')
  }, [])

  useEffect(() => {
    const savedSign = window.localStorage.getItem('AUTH')
    if (savedSign) {
      setSignData(JSON.parse(savedSign))
    }
  }, [])

  useEffect(() => {
    if (SignData) {
      window.localStorage.setItem('AUTH', JSON.stringify(SignData))
    } else {
      window.localStorage.removeItem('AUTH')
    }
  }, [SignData])

  return { SignData, loading, error, signUp, SignUpOut }
}

const useSignUpSharable = () => useBetween(useSignUp)

export { useSignUpSharable as useSignUp }
