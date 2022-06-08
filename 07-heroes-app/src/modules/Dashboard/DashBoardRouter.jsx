import React from 'react'
import { Navbar } from './components/ui/NavBar'
import {Outlet} from "react-router-dom"

const DashBoardRouter = () => {
  return (
    <>
      <Navbar/>
        <div className='container mt-5'>
          <Outlet/>
        </div>
    </>
  )
}

export default DashBoardRouter