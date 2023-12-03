import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from 'antd/es/layout/layout'

const Layout = () => {
  return (
    <>
        <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout