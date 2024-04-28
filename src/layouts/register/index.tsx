import { LayoutProps } from '../../config/types'
import SingleHeader from '../components/singleHeader'

const RegisterLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <SingleHeader/>
      <main style={{padding: '2rem'}}>{children}</main>
    </>
  )
}

export default RegisterLayout
