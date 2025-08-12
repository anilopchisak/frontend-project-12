import LoginPage from '../pages/login/LoginPage.jsx'
import SignupPage from '../pages/signup/SignupPage.jsx'
import NotFoundPage from '../pages/not-found/NotFoundPage.jsx'
import ChatPage from '../pages/chat/ChatPage.jsx'
import PrivateRoute from '../pages/private/PrivateRoute.jsx'

export const routes = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <ChatPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]
