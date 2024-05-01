import { LayoutProps } from '../../config/types/views'
import MainFooter from '../components/mainFooter'
import MainHeader from '../components/mainHeader'

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <main
        style={{
          height: '100%',
          overflow: 'auto'
        }}
      >
        {children}
      </main>
      <MainFooter />
    </>
  )
}

export default MainLayout
