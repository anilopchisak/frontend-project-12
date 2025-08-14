import { useSelector } from 'react-redux'
import UserControls from './ui/UserControls'
import { NavLink } from 'react-router'

const Header = () => {
  const { token } = useSelector(state => state.auth)

  return (
    <header className='w-100 d-flex justify-content-center align-items-center bg-white p-3'>
      <div className="w-100 d-flex justify-content-between">
        <h2>
          <NavLink
            className="text-decoration-none"
            to="/"
          >
            Hexlet Chat
          </NavLink>
        </h2>
        {token
          ? <UserControls />
          : null}
      </div>
    </header>
  )
}

export default Header
