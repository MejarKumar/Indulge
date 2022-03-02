import React from 'react'

function JobSection() {
  return (
      <>
        <div className=' w-full  p-2 mx-auto my-2 h-52  grid shadow-md border-2 rounded-md bg-sky-50'>
            <div className='flex '>
                <div className='w-24 h-24 m-4 bg-black'></div>
                <div className='mt-2'>
                        <h1 className='text-2xl'>Amazon</h1>
                        <p>Eligible Branches : <span className='px-3'>CSE, ECE</span></p>
                        <p>Required CGPA<span className='px-3'>8.0</span> </p>
                        <p>Type: JNF</p>
                </div>
            </div>
            <button className='self-end place-self-end m-2 px-3 py-2 rounded-md bg-gray-400 hover:scale-110 duration-300'>Apply</button>
        </div>
      </>
  )
}

export default JobSection