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
      <img src='/assets/logo.svg' alt='CampusCab logo' className='logo' />
      {pathname === '/register' && (
        <img
          src='/assets/banner.svg'
          alt='CampusCab banner'
          className='banner'
        />
      )}
    </header>
  )
}

export default SingleHeader
