import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page from './components/Page.jsx'
import Home from './components/Home.jsx'
import Courses from './components/Courses.jsx'
import Docs from './components/Docs.jsx'
import Videos from './components/Videos.jsx'
import Web from './components/Web.jsx'
import Suggestions from "./components/Suggestions.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page><Home /></Page>
  },
  {
    path: "/courses",
    element: <Page> <Courses /> </Page>
  },
  {
    path: "/docs",
    element: <Page> <Docs /> </Page>
  },
  {
    path: "/videos",
    element: <Page> <Videos /> </Page>
  },
  {
    path: "/web-tools",
    element: <Page> <Web /> </Page>
  },
  {
    path: "/suggestions",
    element: <Page> <Suggestions /> </Page>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
