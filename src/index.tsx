import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './pages/index.tsx'
import './index.scss'
import './styles/fonts.scss'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { UserProvider } from './providers/userContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={createHashRouter(PAGES)} />
    </UserProvider>
  </React.StrictMode>
)
