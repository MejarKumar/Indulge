import React from 'react'

function SideBarElement({children}) {
  return (
    <>
    <div className='rounded-md w-40 p-2 m-auto text-white text-center bg-blue-300' >
        {children}
    </div>
    </>
  )
}

export default SideBarElement