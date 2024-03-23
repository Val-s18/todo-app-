import { useNavigate } from 'react-router-dom'
import SignUp from '../components/SignUp'
import { useEffect } from 'react'
import { useSignUp } from '../hooks/SignUpHook'

function inscription () {
  const navigate = useNavigate()

  const { authData, signUp } = useSignUp()

  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])
  return (
    <>
      <h1 className='font-bold flex justify-center m-8 mt-32 text-4xl text-violet-800'> Inscription </h1>
      <SignUp signUp={(credentials) => signUp(credentials, navigate)} />

    </>

  )
}

export default inscription
