import { useNavigate } from 'react-router-dom'
import { UserIcon } from '../../../components/ui/icon'
import './index.scss'

const MainHeader = () => {

  const navigate = useNavigate()

  return (
    <>
      <header className='main-header'>
        <img src='/assets/logo.svg' alt='CampusCab logo' className='logo' />
        <UserIcon
          style={{ width: '10%', cursor: 'pointer' }}
          onClick={() => navigate('/profile')}
        />
      </header>
    </>
  )
}

export default MainHeader
