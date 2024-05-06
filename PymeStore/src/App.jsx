import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomeLayout, Login, Landing, Register } from './pages'

const router = createBrowserRouter([
  {
    
    element: <HomeLayout />,
    children: [
      {
        name: 'landing',
        path: '/',
        element: <Landing />,
      },
      {
        name: 'login',
        path: '/login',
        element: <Login />,
      },
      {
        name: 'register',
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
