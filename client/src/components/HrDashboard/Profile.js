import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'





function Profile() {


    const [hr,setHr]=useState({})
    
    const user =JSON.parse(localStorage.getItem('user'));
    useEffect(()=>{
        axios.get(
            'http://localhost:5000/api/hr/hrprofile',{ headers: {"Authorization" : `Bearer ${user.token}`} }
        ).then((res)=>{
            console.log(res.data.profile)
            
            if(res.data.msg==="Not Found")
                window.location.pathname='/hrdashboard/updateCompanyDetails'
                setHr(res.data.profile)
            
        }).catch((err)=>{
            console.log(err)
        })
    },[])








  return (
    <div  className='container w-screen px-64 '>  <div className=" text-left   mx-auto bg-white  border-2 overflow-y-auto h-[calc(100vh-8rem)]  flex-col shadow-lg shadow-indigo-200 opacity-80    ">
    <div className="  w-full h-52  border-b-2 border-slate-800 grid ">
        <div className='flex  self-center'>
            <div className='w-24 h-24 m-4 text-white bg-black rounded-full text-center '>image</div>
            <div className='h-24 m-4 flex flex-col'>
                <h1 className='text-2xl font-semibold m-auto font-mono'>{hr.name}</h1>
                <h2>{hr.username}</h2>
            </div>
        </div>
    </div>





    <div className='w-full  border-b-2 border-black flex flex-col  '>
        <h1 className='text-xl p-4 pb-0 font-bold font-mono'>Contact Details</h1>
        <div className=' container flex flex-row md:flex-col'>
        <p className='p-2 pb-0'><FontAwesomeIcon icon={faEnvelope} className="p-2 translate-y-2 text-red-800" /><span className='font-bold'>Email:</span> {hr.email}</p>
        <p className='p-2'><FontAwesomeIcon icon={faPhone} className="p-2 translate-y-2 text-blue-800" /><span className='font-bold'>Phone Number:</span> {hr.phnNo}</p>
        </div>

    </div>

    <div className='w-full  border-b-2 border-black flex flex-col '>
        <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Company Details</h1>
        <div className='flex  text-center'>
            <div className='flex-1 pb-2'><span className='font-bold'>Name :</span>Amazon</div>
            <div className='flex-1 pb-2'><span className='font-bold'>Category :</span>Product Based</div>
            <div className='flex-1 pb-2'><span className='font-bold'>Website:</span>http://localhost:3001/hrdashboard/updateCompanyDetails</div>
        </div>
       
    </div>


    <div className='w-full  border-b-2 border-black flex flex-col '>
        <h1 className='text-xl p-4 pt-2 font-bold font-sans'>About Company</h1>
        <p className='p-4 pt-0'>About Company</p>

    </div>
</div></div>
  )
}

export default Profile