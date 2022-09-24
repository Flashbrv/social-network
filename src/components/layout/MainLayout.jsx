import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderContainer from '../Header/HeaderContainer'
import Navbar from '../Navbar/Navbar'

const MainLayout = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout