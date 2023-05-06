import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import UserProvider from './Shared/Provider/UseProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider><RouterProvider router={Router}></RouterProvider></UserProvider>
  </React.StrictMode>,
)
