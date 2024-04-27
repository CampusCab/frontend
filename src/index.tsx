import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './pages/index.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(PAGES)}  />
  </React.StrictMode>,
)
