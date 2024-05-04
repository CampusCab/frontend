import './index.scss'

import MainLayout from '../../layouts/main'

function Home() {
  return (
    <>
      <MainLayout>
        <section className='welcome'>
          <h2>Bienvenido</h2>
          <p>¿A dónde quieres ir ahora?</p>
          <img src='/src/assets/banner.svg' alt='CampusCab banner' />
        </section>
      </MainLayout>
    </>
  )
}

export default Home
