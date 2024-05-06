import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout />,
    children: [
      {
        index: true,
        element: <Landign />,
      },
      {
        path:"login",
        element:<login />, 
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  )
}

export default App
