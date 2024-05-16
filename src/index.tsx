import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './pages/index.tsx'
import './index.scss'
import './styles/fonts.scss'
import { RouterProvider, createHashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={createHashRouter(PAGES)}  />
  </React.StrictMode>,
)
