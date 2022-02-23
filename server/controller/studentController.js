const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Student= require("../model/student/student")
const Branch = require('../model/Branch')
const Course = require('../model/course')
const Job= require("../model/company/job")


const UserProfile=asyncHandler(async(req,res)=>{
  const username=req.params.username
  const {branch, course,department,email,phnNo,name,cgpa,skills,socialLinks,experience} =req.body
  const newStudent=new Student({
    username,branch,course,department,email,name,phnNo,cgpa,skills,socialLinks,experience
  })
  await newStudent.save()
  res.json(newStudent);
})


const getAllJobs=async(req,res)=>{
const jobs=await  Job.find({})
res.json({jobs})
}


const getJob=async(req,res)=>{
  const id=req.params.id;
  const job=await Job.findById(id);
  res.send(job);
}

const apply=async(req,res)=>{
   const jobId=req.params.id
   const userId=req.user._id
  try{

    await Job.findOneAndUpdate({_id:jobId},{$addToSet:{appliedStudents:userId }})
    await Student.findOneAndUpdate({_id:userId},{   $addToSet:{appliedJobs:jobId }})

    res.status(200).json({message:"Applied successfully"})
  }catch(err){
    res.status(404).json({message:"Something went wrong"})
  }
}

module.exports = {
  UserProfile,
  getAllJobs,
  getJob,
  apply
}