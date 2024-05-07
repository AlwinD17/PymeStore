import { useState } from 'react'
import { Sidebar, Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div style={{
        
    }}>
      <Sidebar sidebarToggle={sidebarToggle} />
      <div style={{ 
        // width:'100%'
        }}>
      <Navbar 
        sidebarToggle = {sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
        <div style={{
            // width:'100%',
            marginLeft:'256px',
            minHeight:'calc(100vh-57.33px)'
        }}>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout;

