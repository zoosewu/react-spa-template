import React from 'react'
import Layout from './components/layout/layout'
import Home from './components/home'
import ReducerDispatch from './components/reducerDispatch'
import NoMatch from './components/noMatch'
import './App.scss'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
interface NavLabel {
  label?: string
}

export type ContainerRouter = RouteObject & NavLabel
export const containerRouter: ContainerRouter[] = [
  { index: true, element: <Home /> },
  { path: 'home', element: <Home />, label: 'Home' },
  { path: 'reducerDispatch', element: <ReducerDispatch />, label: 'Reducer' },
  { path: '*', element: <NoMatch /> }
]
export const router: Router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: containerRouter
  }
] as RouteObject[])
const App = (): JSX.Element => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
