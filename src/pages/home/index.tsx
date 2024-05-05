import './index.scss'

import MainLayout from '../../layouts/main'

function Home() {
  return (
    <>
      <MainLayout>
        <section className='welcome'>
          <h2>Bienvenido</h2>
          <p>¿A dónde quieres ir ahora?</p>
          <img src='/assets/banner.svg' alt='CampusCab banner' style={{ position: 'absolute', bottom: '4rem', maxWidth: '430px' }}/>
        </section>
      </MainLayout>
    </>
  )
}

export default Home
