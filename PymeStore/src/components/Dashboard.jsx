import React from 'react'
import Navbar from './Navbar'

const Dashboard = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64  "} w-full`}>
    </div>
  )
}

export default Dashboard