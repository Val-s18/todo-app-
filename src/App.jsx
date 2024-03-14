import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todos from './pages/Todos'
import Auth from './pages/Auth'
import CustomNavBar from './components/CustomNavBar'

function App () {
  return (
    <>

      <CustomNavBar />
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Todos />} />
          <Route index path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
