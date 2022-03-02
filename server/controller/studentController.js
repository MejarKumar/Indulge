const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Student= require("../model/student/student")
const Branch = require('../model/Branch')
const Course = require('../model/course')
const Job= require("../model/company/job")


const UserProfile=asyncHandler(async(req,res)=>{
  const username=req.params.username
  const {branch, course,department,email,phnNo,name,cgpa,skills} =req.body
  const newStudent=new Student({
    username,branch,course,department,email,name,phnNo,cgpa,skills
  })
  await newStudent.save()
  res.json(newStudent);
})


const getAllJobs=async(req,res)=>{
const jobs=await  Job.find({})
res.json({jobs})
}


const getJob=async(req,res)=>{
  const id=req.params.jobId;
  const job=await Job.findById(id);
  res.send(job);
}

const apply=async(req,res)=>{
   const jobId=req.params.jobId
   const user=req.user.username
  try{
   
    let job= await Job.findOne({_id:jobId})
    let student=await Student.findOne({username:user})
    job.appliedStudents.addToSet({student:student._id,status:false})
    job.save();
    student.appliedJobs.addToSet({job:jobId,status:false})
    student.save();

    res.status(200).json({message:"Applied successfully"})
  }catch(err){
    console.log(err)
    res.status(404).json({message:"Something went wrong"})
  }
}

const getMyProfile=async(req,res)=>{
  if(req.user.username!==req.params.username)
  {
    res.status(403).json({msg:"not authorised"})
  }
  const myProfile=await Student.findOne({username:req.user.username});

  if(!myProfile)
  {
    res.status(200).json({msg:"update your profile"})
  }
  else
  res.status(200).json({profile:myProfile})
}

module.exports = {
  UserProfile,
  getAllJobs,
  getJob,
  apply,
  getMyProfile
}