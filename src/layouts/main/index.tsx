import MainFooter from '../components/mainFooter'
import MainHeader from '../components/mainHeader'

export type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
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
