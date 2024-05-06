import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'

const HomeLayout = () =>{
    return(
    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flexGrow: 1 }}>
            <Outlet />
        </main>
        <Footer />
    </div>
        
    </>)
}

export default HomeLayout