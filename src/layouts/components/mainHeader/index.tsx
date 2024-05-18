import { UserIcon } from '../../../components/ui/icon'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { UseAuth } from '../../../hooks/useAuth'

const MainHeader = () => {
  const { logout } = UseAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className='main-header'>
      <img src='/assets/logo.svg' alt='CampusCab logo' className='logo' />
      <UserIcon
        style={{ width: '10%', cursor: 'pointer' }}
        onClick={() => handleLogout()}
      />
    </header>
  )
}

export default MainHeader
