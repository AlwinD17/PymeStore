import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import './App.css'
import { 
  HomeLayout,
   Login, 
   Landing, 
   Register, 
   Additional, 
   Gestor, 
   Productos, 
   Contacto, 
   Pedidos, 
   Clientes, 
   Envios, 
   Pagos, 
   Profile 
  } from './pages'


const routes = createBrowserRouter([
  {
    element: <HomeLayout />,
    children:[
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
      },
      {
        name: 'Contacto',
        path: '/contacto',
        element: <Contacto />,
      }
    ]
  },
  {
    path: '/gestor',
    element: <Gestor />,
  },
  {
    path:'/productos',
    element:<Productos />
  },
  {
    path:'/pedidos',
    element:<Pedidos />
  },
  {
    path:'/clientes',
    element:<Clientes />
  },
  {
    path:'/envios',
    element:<Envios />
  },
  {
    path:'/Pagos',
    element:<Pagos />
  },
  {
    path:'/profile',
    element:<Profile />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
