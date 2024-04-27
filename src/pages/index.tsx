import { Route } from 'react-router-dom'
import Home from './home'

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
    path: '/about',
    element: <div>About</div>,
    exact: true
  }
]
