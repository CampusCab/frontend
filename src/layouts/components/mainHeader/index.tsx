import { UserIcon } from '../../../components/ui/icon'
import './index.scss'

const MainHeader = () => {
  return (
    <header className='main-header'>
      <img src='/assets/logo.svg' alt='CampusCab logo' className='logo' />
      <UserIcon style={{ width: '10%', cursor: 'pointer' }} />
    </header>
  )
}

export default MainHeader
