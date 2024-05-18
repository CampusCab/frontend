import './index.scss'

import MainLayout from '../../layouts/main'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../providers/userContext'

function Home() {
  const { userInfo } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(userInfo.isLogged)
    if (!userInfo.isLogged) navigate('/login')
  }, [navigate, userInfo.isLogged])

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
