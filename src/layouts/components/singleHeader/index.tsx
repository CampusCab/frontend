import './index.scss'

import { useLocation } from 'react-router-dom'

const SingleHeader = () => {
  const { pathname } = useLocation()
  return (
    <header
      className={`header header${
        pathname === '/register' ? '--register' : '--login'
      }`}
    >
      <img src='/src/assets/logo.svg' alt='Campuscap logo' className='logo' />
      {pathname === '/register' && (
        <img
          src='src/assets/banner.svg'
          alt='Campuscap banner'
          className='banner'
        />
      )}
    </header>
  )
}

export default SingleHeader
