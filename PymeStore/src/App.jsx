import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomeLayout, Login, Landing, Register } from './pages'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path:"login",
        element:<Login />, 
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
