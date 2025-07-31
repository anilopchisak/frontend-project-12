import LoginPage from '../pages/login/LoginPage.jsx'
import SignupPage from '../pages/signup/SignupPage.jsx'
import NotFoundPage from '../pages/not-found/NotFoundPage.jsx'

export const routes = [
    {
        path: '/',
        element: <LoginPage />,
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
