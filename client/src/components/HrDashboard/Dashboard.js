import React from 'react'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <>
        <NavLink to='profile'>
            <div className='w-52 h-52  p-3 rounded-lg hover:scale-105 duration-500 text-white bg-gradient-to-tl from-yellow-300 via-yellow-400 to-yellow-500'>
                <h1 className='text-2xl p-2 mt-[50%] -translate-y-1/2'>Profile</h1>
            </div>
        </NavLink>
        <NavLink to='addJNF-INF'>
            <div className='w-52 h-52  p-3 rounded-lg hover:scale-105 duration-500 text-white bg-gradient-to-tl from-green-300 via-green-400 to-green-500'>
                <h1 className='text-2xl p-2 mt-[50%] -translate-y-1/2'>Add A JNF/INF</h1>
            </div>
        </NavLink>
        <NavLink to='allJNF-INF'>
            <div className='w-52 h-52  p-3 rounded-lg hover:scale-105 duration-500 text-white bg-gradient-to-tl from-purple-300 via-purple-400 to-purple-800'>
                <h1 className='text-2xl p-2 mt-[50%] -translate-y-1/2'>All JNF/INF</h1>
            </div>
        </NavLink>
    </>
  )
}

export default Dashboard