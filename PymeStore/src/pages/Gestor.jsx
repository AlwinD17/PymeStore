import { useState } from 'react'
import { Sidebar, Dashboard } from '../components'


const Gestor = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className='flex'>
      <Sidebar sidebarToggle={sidebarToggle} />
      <div className='flex flex-col w-full'>
        <Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>
    </div>
  )
}

export default Gestor
