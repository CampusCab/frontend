import { Route } from 'react-router-dom'
import Home from './home'
import LoginPage from './login'
import RegisterPage from './register'
import ConfirmRegister from '../containers/confirmRegister'
import LoginLayout from '../layouts/login'
import FindTrip from './findTrip'
import OfferTrip from './offerTrip'

type Route = {
  path: string
  element: JSX.Element
  exact: boolean
  children?: Route[]
}

export const PAGES: Route[] = [
  {
    path: '/',
    element: <Home />,
    exact: true
  },
  {
    path: '/login',
    element: <LoginPage />,
    exact: true
  },
  {
    path: '/register',
    element: <RegisterPage />,
    exact: true,
    children: [
      {
        path: ':id/confirm',
        element: (
          <LoginLayout>
            <ConfirmRegister />
          </LoginLayout>
        ),
        exact: true
      }
    ]
  },
  {
    path: '/find-trip',
    element: <FindTrip />,
    exact: true,
    
  },
  {
    path: '/offer-trip',
    element: <OfferTrip />,
    exact: true,
  },  
]
