import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavBar() {
  return (
    <>
    <div className='w-full h-24 flex relative bg-red-50 '>
    <FontAwesomeIcon  icon={faUser} className="text-3xl my-auto  absolute right-5 top-1/2 -translate-y-1/2 "/>
    </div>
    </>
  )
}

export default NavBar