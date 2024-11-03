import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './Pages/Home';
import Coffees from './Pages/Coffees';
import Dashboard from './Pages/Dashboard';
import CoffeeCards from './components/CoffeeCards';
import CoffeeDetails from './Pages/CoffeeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('../coffees.json')
          },
          {
            path: '/category/:category',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('../coffees.json')
          }
        ]
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
        loader: () => fetch('../coffees.json')
      },
      {
        path: '/coffee/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch('../coffees.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
