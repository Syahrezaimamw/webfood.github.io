import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { About } from './layout/About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Menu } from './layout/Menu.jsx'

const router = createBrowserRouter([
  {
    path: "/webfood.github.io/",
    element: <App />,
  },
  {
    path: "/webfood.github.io/about/",
    element: <About/>,
  },
  {
    path: "/webfood.github.io/menu/",
    element: <Menu/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  </React.StrictMode>,
)
