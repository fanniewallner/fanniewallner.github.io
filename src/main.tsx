import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

const router = createBrowserRouter([
  {
    path: "/",
    element:<LandingPage></LandingPage>
  },
  {
    path: "/about",
    element:<About></About>
  },
  {
    path: "/portfolio",
    element:<Portfolio></Portfolio>
  },
  {
    path: "/contact",
    element:<Contact></Contact>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
