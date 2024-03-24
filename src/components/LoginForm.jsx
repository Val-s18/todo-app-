import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../hooks/authHook'

function LoginForm () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth()

  const handlechange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
  }
  return (
    <>
      <form
        className='flex flex-col  gap-7 pr-10 pl-10 '
        onSubmit={handleSubmit}
      >
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
          Se connecter
        </Button>

        {/* <pre>
        {JSON.stringify(authData, null, 2)}
      </pre> */}

      </form>

    </>
  )
}

export default LoginForm
