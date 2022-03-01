import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavBar() {
  return (
    <>
    <div className='w-full h-24 flex relative text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
        <h1 className='text-2xl my-auto mx-3 font-sans font-semibold'>Recuiter Dashboard</h1>
    <FontAwesomeIcon  icon={faUser} className="text-3xl my-auto  absolute right-5 top-1/2 -translate-y-1/2 "/>
    </div>
    </>
  )
}

export default NavBar