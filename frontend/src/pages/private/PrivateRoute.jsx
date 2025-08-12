import {useSelector} from 'react-redux'
import SocketProvider from '../../app/providers/socket/SocketProvider.jsx'
import {Navigate} from 'react-router'

const PrivateRoute = ({children}) => {
  const { token } = useSelector((state) => state.auth)
  return token
    ? (
      <>
        <SocketProvider />
        {children}
      </>
    )
    : <Navigate to="/login" />
}

export default PrivateRoute