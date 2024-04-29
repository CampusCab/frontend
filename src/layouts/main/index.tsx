import { LayoutProps } from '../../config/types/views'
import MainFooter from '../components/mainFooter'
import MainHeader from '../components/mainHeader'

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <main style={{ marginTop: '7rem', marginBottom: '5rem', height: '100%' }}>
        {children}
      </main>
      <MainFooter />
    </>
  )
}

export default MainLayout
