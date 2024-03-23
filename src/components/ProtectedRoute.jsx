import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/authHook'

function ProtectedRoute () {
  const { authData } = useAuth()

  return (

    authData?.token && authData?._user
      ? (<Outlet />)
      : (

        <Navigate to='/auth' />

        )
  )
}

export default
ProtectedRoute
