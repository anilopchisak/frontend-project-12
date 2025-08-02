import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/model/authSlice'
import { NavLink } from 'react-router'

const Header = () => {
    const dispatch = useDispatch()
    const {token} = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header>
            <NavLink to='/'>HEADER</NavLink>
            {token ?
                <button onClick={handleLogout}>logout</button>
                :
                null
            }
        </header>
    )
}

export default Header
