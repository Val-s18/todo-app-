import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../hooks/authHook'

function LoginForm () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { login, authData, logout } = useAuth()

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
    <form
      className='flex flex-col w-full gap-5'
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
      >
        Se connecter
      </Button>
      <pre>
        {JSON.stringify(authData, null, 2)}
      </pre>

      <Button color='danger' onPress={logout}>
        Se déconnecter
      </Button>
    </form>

  )
}

export default LoginForm