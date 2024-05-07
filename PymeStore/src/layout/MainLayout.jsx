import { Outlet } from 'react-router-dom'
import Sidenav from '../components/Sidenav'
import { Navbar } from '../components';
import Box from '@mui/material/Box';
import "../Dash.css";
const MainLayout = () => {
  
  return (
    <>
      <div className='bgcolor'>
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </div>
      
    </>
  )
}

export default MainLayout;

