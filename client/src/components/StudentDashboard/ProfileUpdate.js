import Select from "react-select";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BranchOptions = [
    {
        value: "COMPUTER SCIENCE AND ENGINEERING",
        label: "COMPUTER SCIENCE AND ENGINEERING",
    },
    {
        value: "ELECTRONICS AND COMMUNICATION ENGINEERING",
        label: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    },
    { value: "ELECTRICAL ENGINEERING", label: "ELECTRICAL ENGINEERING" },
    { value: "MECHANICAL ENGINEERING", label: "MECHANICAL ENGINEERING" },
];

const DepartmentOptions = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
    { value: "c", label: "c" },
    { value: "d", label: "d" },
];
const CourseOptions = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
    { value: "c", label: "c" },
    { value: "d", label: "d" },
];



function ProflieUpdate() {
    const [student,setStudent]=useState("")
    const [name,setName]=useState("")
    const [phnNo,setPhnNo]=useState("")
    const [cgpa,setCgpa]=useState("")
    const [email,setEmail]=useState("")
    const [branch,setBranch]=useState(BranchOptions[0].value)
    const [course,setCourse]=useState(CourseOptions[0].value)
    const [department,setDepartment]=useState(DepartmentOptions[0].value)
    const [skills,setSkills]=useState("")

    const handleName=(e)=>{
        setName(e.target.value)
      } 
  
    const handleEmail=(e)=>{
        setEmail(e.target.value)
      } 
    const handleCgpa=(e)=>{
        setCgpa(e.target.value)
      } 
    const handlePhnNo=(e)=>{
        setPhnNo(e.target.value)
      } 
    const handleBranch=(e)=>{
        console.log(e)
        setBranch(e)
      } 
    const handleDepartment=(e)=>{
        setDepartment(e)
      } 
    const handleCourse=(e)=>{
        setCourse(e)
      } 
      const handleSkills=(e)=>{
        setSkills(e.target.value)
      }   
    const user =JSON.parse(localStorage.getItem('user'));
  
    function handleSubmit(e) {
        e.preventDefault()
     

        const datas={
            name,email,course:course.value,department:department.value,branch:branch.value,skills,phnNo,cgpa
        }
        axios.post(
            `http://localhost:5000/api/student/profile/${user.username}`,datas,{ headers: {"Authorization" : `Bearer ${user.token}`} }
        ).then((res)=>{
            setStudent(res.data)
            console.log(student);
            window.location.pathname="/studentdashboard/profile"
        }).catch((err)=>{
            console.log(err)
        })
    }
    



    return (
        <>

            <div className="p-4 mt-10 sm:mt-0 ">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-2xl  font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action=""  onSubmit={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block text-lg font-medium text-gray-700">Student name</label>
                                            <input type="text" value={name} onChange={handleName} name="name" id="name" autocomplete="given-name" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>


                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-lg font-medium text-gray-700">Email address</label>
                                            <input type="text" value={email} onChange={handleEmail}  name="email" id="email" autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="country" className="block text-lg font-medium text-gray-700">Course</label>
                                            <Select id="course" name="course" value={course} options={CourseOptions} onChange={handleCourse} autocomplete="course" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                                
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="country" className="block text-lg font-medium text-gray-700">Department</label>
                                            <Select id="department" name="department" value={department} options={DepartmentOptions} onChange={handleDepartment} autocomplete="department" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                               
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="Branch" className="block text-lg font-medium text-gray-700">Branch</label>
                                            <Select id="branch" name="branch" value={branch} options={BranchOptions} onChange={handleBranch} autocomplete="branch" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                                
                                        </div>
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label for="city" className="block text-lg font-medium text-gray-700">Phone Number</label>
                                            <input type="text" name="phnNo" id="phnNo" value={phnNo} onChange={handlePhnNo} autocomplete="phnNo-level2" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>


                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="cgpa-code" className="block text-lg font-medium text-gray-700">CGPA</label>
                                            <input type="text" name="cgpa" id="cgpa" value={cgpa} onChange={handleCgpa} autocomplete="cgpa-code" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="cgpa-code" className="block text-lg font-medium text-gray-700">Skills</label>
                                            <input type="text" name="skills" id="skills" value={skills} onChange={handleSkills} autocomplete="cgpa-code" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="cv-code" className="block text-lg font-medium text-gray-700">Upload Resume</label>
                                            <input type="file" name="cv" id="cgpa" autocomplete="cv-code" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>


                                        

                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    
        </>
    );
}

export default ProflieUpdate;
