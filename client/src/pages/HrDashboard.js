import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/HrDashboard/NavBar'

const HrDashboard = () => {
  return (
    <>
    <NavBar/>
    <div className='flex content-center justify-around  text-center mt-5'>
        <Outlet/>
    </div>
    </>
  )
}

export default HrDashboard