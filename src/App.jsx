import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todos from './pages/Todos'
import Auth from './pages/Auth'
import CustomNavBar from './components/CustomNavBar'
import ProtectedRoute from './components/ProtectedRoute'

function App () {
  return (
    <>

      <CustomNavBar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route index path='/' element={<Todos />} />
          </Route>
          <Route index path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
