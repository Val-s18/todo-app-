import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { useEffect } from 'react'
import { useAuth } from '../hooks/authHook'

function Auth () {
  const navigate = useNavigate()

  const { authData } = useAuth()
  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])
  return (
    <>

      <h1> Connexion </h1>
      <LoginForm />

    </>

  )
}

export default Auth
