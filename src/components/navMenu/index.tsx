import { useLocation, useNavigate } from 'react-router-dom'
import './index.scss'
import { CarIcon, RideIcon } from '../ui/icon'

const NavMenu = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <section className='nav-menu'>
      <div
        className={`nav-menu__option ${
          pathname === '/find-trip' ? 'nav-menu__option--active' : ''
        }`}
        onClick={() => {
          handleNavigate('/find-trip')
        }}
      >
        <RideIcon />
        <p>Buscar viaje</p>
      </div>
      <div
         className={`nav-menu__option ${
            pathname === '/offer-trip' ? 'nav-menu__option--active' : ''
          }`}
        onClick={() => {
          handleNavigate('/offer-trip')
        }}
      >
        <CarIcon />
        <p>Ofrecer viaje</p>
      </div>
    </section>
  )
}

export default NavMenu
