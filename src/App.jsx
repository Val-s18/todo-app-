import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todos from './pages/Todos'
import Auth from './pages/Auth'
import Inscription from './pages/Inscription'
import CustomNavBar from './components/CustomNavBar'
import ProtectedRoute from './components/ProtectedRoute'
import { CircularProgress } from '@nextui-org/react'
import { useTodos } from './hooks/todosHook'

function App () {
  const { loading } = useTodos()

  if (loading) {
    return <CircularProgress color='primary' className=' mx-auto p-10' />
  }
  return (
    <>

      <CustomNavBar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route index path='/' element={<Todos />} />
          </Route>
          <Route index path='/inscription' element={<Inscription />} />
          <Route index path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
