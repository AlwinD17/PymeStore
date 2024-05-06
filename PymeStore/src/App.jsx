import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomeLayout, Login, Landing } from './pages'

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
      }
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
