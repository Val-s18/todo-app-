import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useSignUp } from '../hooks/SignUpHook'

function SignUp () {
  const [formData, setFormData] = useState({
    // firstName: 'va',
    email: '',
    password: ''
  })

  const { signUp } = useSignUp()

  const handlechange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(formData)
      window.location.href = '/' // Redirection vers la page d'accueil après inscription réussie
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form
        className='flex flex-col gap-7 pr-10 pl-10'
        onSubmit={handleSubmit}
      >
        {/* <Input
          name='firstname'
          type='text'
          label='Firstname'
          variant='flat'
          onChange={handlechange}
          value={formData.firstName}
        /> */}

        <Input
          name='email'
          type='email'
          label='Email'
          variant='flat'
          onChange={handlechange}
          value={formData.email}
        />

        <Input
          name='password'
          type='password'
          label='Password'
          variant='flat'
          onChange={handlechange}
          value={formData.password}
        />

        <Button
          type='Submit'
          color='secondary'
          size='md'
        >
          S'inscrire
        </Button>
        {/* <pre>
          {JSON.stringify(SignData, null, 2)}
        </pre> */}

      </form>
    </>
  )
}

export default SignUp
