import { Route } from 'react-router-dom'
import Home from './home'
import LoginPage from './login'
import RegisterPage from './register'
import VerifyRegister from '../containers/verifyRegister'
import LoginLayout from '../layouts/login'
import FindTripPage from './findTrip'
import OfferTripPage from './offerTrip'
import YourTripPage from './yourTrip'
import RateDriverPage from './rateDriver'
import Profile from './profile'
import RatePassengersPage from './ratePassengers'

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
        path: ':email/confirm',
        element: (
          <LoginLayout>
            <VerifyRegister />
          </LoginLayout>
        ),
        exact: true
      }
    ]
  },
  {
    path: '/find-trip',
    element: <FindTripPage />,
    exact: true,
    children: [
      {
        path: 'your-trip/:id',
        element: <YourTripPage />,
        exact: true
      }
    ]
  },
  {
    path: '/offer-trip',
    element: <OfferTripPage />,
    exact: true,
    children: [
      {
        path: 'your-trip/:id',
        element: <YourTripPage />,
        exact: true
      }
    ]
  },
  {
    path: '/rate-driver/:id',
    element: <RateDriverPage />,
    exact: true
  },
  {
    path: '/rate-passengers/:id',
    element: <RatePassengersPage />,
    exact: true
  },
  {
    path: '/profile',
    element: <Profile />,
    exact: true
  },
  {
    path: '*',
    element: <div>404</div>,
    exact: true
  }
]
