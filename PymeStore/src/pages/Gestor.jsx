import { useState } from 'react'
import { Sidebar, Dashboard } from '../components'


const Gestor = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className='flex'>
        <Sidebar sidebarToggle = {sidebarToggle}/>
        <Dashboard 
        sidebarToggle = {sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default Gestor
