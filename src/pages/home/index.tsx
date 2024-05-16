import './index.scss'

import MainLayout from '../../layouts/main'
import { UseAuth } from '../../providers/auth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  const { isLogged } = UseAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) navigate('/login', { replace: true })
  }, [isLogged, navigate])

  return (
    <>
      <MainLayout>
        <section className='welcome'>
          <h2>Bienvenido</h2>
          <p>¿A dónde quieres ir ahora?</p>
          <img
            src='/assets/banner.svg'
            alt='CampusCab banner'
            style={{ position: 'absolute', bottom: '4rem', maxWidth: '430px' }}
          />
        </section>
      </MainLayout>
    </>
  )
}

export default Home
