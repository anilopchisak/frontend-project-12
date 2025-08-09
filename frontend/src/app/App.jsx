// import AppRouter from './providers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import './styles/App.css'
import Header from '../widgets/header/Header.jsx'
import LoginPage from '../pages/login/LoginPage.jsx'
import SignupPage from '../pages/signup/SignupPage.jsx'
import NotFoundPage from '../pages/not-found/NotFoundPage.jsx'
import ChatPage from '../pages/chat/ChatPage.jsx'
import SocketProvider from './providers/SocketProvider.jsx'

const App = () => {
  const token = useSelector((state) => state.auth.token)

  return (
    <>
      <Header />
      <main id='content'>
        {token && <SocketProvider />}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={token ? <ChatPage /> : <Navigate to="/login" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
