import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
function Profile() {
    const [student,setStudent]=useState({})
    
    const user =JSON.parse(localStorage.getItem('user'));
    useEffect(()=>{
        axios.get(
            `http://localhost:5000/api/student/profile/${user.username}`,{ headers: {"Authorization" : `Bearer ${user.token}`} }
        ).then((res)=>{
            console.log(res.data.profile)
            setStudent(res.data.profile)
            if(res.data.msg==="update your profile")
                window.location.pathname='/studentdashboard/update_profile'
            
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <>
            <div className="  w-[calc(100%-30rem)]  mx-auto bg-white  border-2 overflow-y-auto h-[calc(100vh-8rem)]  flex-col shadow-lg shadow-indigo-200 opacity-80    ">
                <div className="  w-full h-52  border-b-2 border-slate-800 grid ">
                    <div className='flex  self-center'>
                        <div className='w-24 h-24 m-4 text-white bg-black rounded-full text-center '></div>
                        <div className='h-24 m-4 flex flex-col'>
                            <h1 className='text-2xl font-semibold m-auto font-mono'>{student.name}</h1>
                            <h2>{student.username}</h2>
                        </div>
                    </div>

                    <div className='w-full flex flex-row justify-end pr-10  '>
                        
                        <form>
                            <button className='flex flex-row justify-center items-center bg-green-700 text-gray-100  rounded-sm hover:scale-105  transition-transform'>
                            <h1 className=' p-2'> Download Resume</h1>
                        <FontAwesomeIcon icon={faDownload} className=" px-2 translate-y-1" />
                            </button>
                        </form>
                         
                      
                       
                    </div>

                </div>





                <div className='w-full  border-b-2 border-black flex flex-col  '>
                    <h1 className='text-xl p-4 pb-0 font-bold font-mono'>Contact Details</h1>
                    <div className=' container flex flex-row md:flex-col'>
                    <p className='p-2 pb-0'><FontAwesomeIcon icon={faEnvelope} className="p-2 translate-y-2 text-red-800" /><span className='font-bold'>Email:</span>{student.email}</p>
                    <p className='p-2'><FontAwesomeIcon icon={faPhone} className="p-2 translate-y-2 text-blue-800" /><span className='font-bold'>Phone Number:</span> {student.phnNo}</p>
                    </div>

                </div>

                <div className='w-full  border-b-2 border-black flex flex-col '>
                    <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Academics Details</h1>
                    <div className='flex  text-center'>
                        <div className='flex-1 pb-2'><span className='font-bold mx-3'>Branch:</span>{student.branch}</div>
                        <div className='flex-1 pb-2'><span className='font-bold mx-3'>Department:</span>{student.department}</div>
                        <div className='flex-1 pb-2'><span className='font-bold mx-3'>Course:</span>{student.course}</div>
                    </div>
                    <div className='p-4'><span className='font-bold'>CGPA:</span>{student.cgpa}</div>
                </div>


                <div className='w-full  border-b-2 border-black flex flex-col '>
                    <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Skills</h1>
                    <p className='p-4 pt-0'>{student.skills}</p>

                </div>



                {/* <div className='w-full  border-b-2 border-black flex  flex-col'>
                    <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Experience</h1>
                    <p className='p-4 pt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>



                <div className='w-full   border-black flex flex-col '>
                    <h1 className='text-xl p-4 pt-2 font-bold font-sans'>Social Links</h1>
                    <p className='p-4 pt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div> */}
            </div>
        </>
    )
}

export default Profile