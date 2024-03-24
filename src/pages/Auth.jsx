import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { useEffect } from 'react'
import { useAuth } from '../hooks/authHook'
import CardReseaux from '../components/CardReseaux'

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

      <h1
        className='font-bold flex justify-center m-8 mt-32 text-4xl text-violet-800'
      > Connexion
      </h1>
      <LoginForm />
      <CardReseaux />

    </>

  )
}

export default Auth
