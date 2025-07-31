import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/model/authSlice'

const Header = () => {
    const dispatch = useDispatch()
    const {token} = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header>
            {token ?
                <button onClick={handleLogout}>logout</button>
                :
                <p>HEADER</p>
            }
        </header>
    )
}

export default Header
