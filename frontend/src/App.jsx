import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
