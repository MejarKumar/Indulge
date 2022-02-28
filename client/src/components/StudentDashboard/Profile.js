import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Profile() {
  return (
    <>        
    <div className="  w-[calc(100%-30rem)]  mx-auto border-black border-2 overflow-y-auto h-[calc(100vh-8rem)]  flex-col">
        <div className="  w-full h-52  border-b-2 border-black grid ">
            <div className='flex  self-center'>
                <div className='w-24 h-24 m-4 text-white bg-black rounded-full text-center '>image</div>
                <div className='h-24 m-4 flex '>
                    <h1 className='text-2xl m-auto'>Raman Sain</h1> 
                </div>
            </div>
        </div>


        <div className='w-full  border-b-2 border-black flex  '>
           <h1 className=' p-5'> My CV </h1>
          <FontAwesomeIcon  icon={faDownload} className=" py-5 translate-y-1"/>
        </div>

        
        <div className='w-full  border-b-2 border-black flex flex-col '>
            <h1 className='text-xl p-4 pb-0 font-bold font-sans'>Contact Details</h1>
            <p className='p-2 pb-0'><FontAwesomeIcon  icon={faEnvelope} className="p-2 translate-y-2"/><span className='font-bold'>Email:</span> raman@gmail.com</p>
            <p className='p-2'><FontAwesomeIcon  icon={faPhone} className="p-2 translate-y-2"/><span className='font-bold'>Phone Number:</span> 9983497370</p>
        </div>

        <div className='w-full  border-b-2 border-black flex flex-col '>
            <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Academics Details</h1>
            <div className='flex  text-center'>
                <div className='flex-1 pb-2'><span className='font-bold'>Branch:</span>ECE</div>
                <div className='flex-1 pb-2'><span className='font-bold'>Department:</span>Electronics Department</div>
                <div className='flex-1 pb-2'><span className='font-bold'>Course:</span>B.Tech</div>
            </div>
            <div className='p-4'><span className='font-bold'>CGPA:</span>10</div>
        </div>


        <div className='w-full  border-b-2 border-black flex flex-col '>
        <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Skills</h1>
        <p className='p-4 pt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

        </div>



        <div className='w-full  border-b-2 border-black flex  flex-col'>
        <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Experience</h1>
        <p className='p-4 pt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
       


        <div className='w-full  border-b-2 border-black flex flex-col '>
        <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Social Links</h1>
        <p className='p-4 pt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
    </div>
    </>
  )
}

export default Profile