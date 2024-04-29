import { UserIcon } from '../../../components/ui/icon'
import './index.scss'

const MainHeader = () => {
  return (
    <header className='main-header'>
      <img src='/src/assets/logo.svg' alt='Campuscap logo' className='logo' />
      <UserIcon style={{ width: '10%', cursor: 'pointer' }} />
    </header>
  )
}

export default MainHeader
