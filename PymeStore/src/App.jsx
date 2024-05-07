import { createBrowserRouter,  RouterProvider } from 'react-router-dom'

import { 
   Login, 
   Landing, 
   Register, 
   Additional, 
   Productos, 
   Contacto, 
   Pedidos, 
   Clientes, 
   Envios, 
   Pagos, 
   Profile,
   Crear, 
   Settings,
   Estadisticas
  } from './pages'
import { HomeLayout, MainLayout } from './layout';


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
      },
      {
        name: 'Crear',
        path: '/crear',
        element: <Crear />,
      }
    ]
  },
  {
    element: <MainLayout />,
    children: [
      {
        path:'/productos',
        element:<Productos />
      },
      {
        path:'/estadisticas',
        element:<Estadisticas />
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
      },
      {
        path:'/settings',
        element:<Settings />
      }
    ]
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
