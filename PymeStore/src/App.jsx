import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomeLayout, Login, Landing, Register, Additional, Gestor } from './pages'

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
      {
        name: 'about us',
        path: '/about_us',
        element: <Additional title={{name : 'Sobre nosotros'}} />,
      },
      {
        name: 'Términos y Condiciones',
        path: '/terminos_condiciones',
        element: <Additional title=  {{name:'Términos y condiciones'}} />,
      }
    ],
  },
  {
    name: 'gestor',
    path: '/gestor',
    element: <Gestor />,
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
