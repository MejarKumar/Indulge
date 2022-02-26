const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Company=require("../model/company/companyDetail")
const HR=require("../model/company/hrDetails")
const Job = require('../model/company/job')
const Student=require("../model/student/student")

const addCompanyDetails=async(req,res)=>{
const {name,phnNo,email,companyCategory,websiteLink}=req.body

const newCompany =await Company.create({
    name:name,
    category:companyCategory,
    website:websiteLink
})
    const newHr=await HR.create({
        username:req.user.username,
        name:req.body.name,
        phnNo,
        email,
        company:newCompany._id
    })
    res.status(200).json({message:"successfully added details",hr:newHr,company:newCompany})

}


const addJob=async(req,res)=>{

    let hr=await HR.findOne({username:req.user.username})
    if(!hr)
    {
        res.status(404).json({message:"not authorised"})
    }
    if(!hr.company)
    {
        res.send("add company first");
    }
     const {
        type,
        profile,
        description,
        eligible_branch,
        cutOffGpa,
        ctc,
        placeOfPosting,
        tenure,
        skillsRequired,
        resumeShortlisting,
        typeOfTest,
        otherQualificationRounds,
        finalNote
    }=req.body
    if(!type || !profile || !description|| !eligible_branch|| !cutOffGpa|| !ctc|| !placeOfPosting|| !tenure|| !skillsRequired|| !resumeShortlisting|| !typeOfTest|| !otherQualificationRounds|| !finalNote)
    {
        return res.send("all fields are required")
    }
    
    const newJob=await Job.create({
         companyDetails:hr.company,
         type,
         profile,
         description,
         eligible_branch,
         cutOffGpa,ctc,
         placeOfPosting,
         tenure,
         skillsRequired,
         resumeShortlisting,
         typeOfTest,
         otherQualificationRounds,
         finalNote
    })

    hr=await  HR.findOneAndUpdate({username:req.user.username},{$push:{jobs:newJob._id}},{new:true});
    const company =await Company.findOneAndUpdate({_id:hr.company},{$push:{jobs:newJob._id }})
    res.status(200).json({message:"JNF/INF Added successfully",job:newJob})
}


const getAllJobs=async(req,res)=>{

    const hr=await HR.findOne({username:req.user.username})
    if(!hr)
    {
        res.status(404).json({message:"not authorised"})
    }

    res.status(200).json({jobs:hr.jobs})

}

const getApplicants=async(req,res)=>{

    const jobId=req.params.jobId;
    const hr=await HR.findOne({username:req.user.username})
    if(!hr)
    {
    return res.send("Hr Not Found");
    }
    function findJobId(element){
        return element.toString()===jobId
    }
   const id= hr.jobs.find(findJobId)
    if(id){
        const job =await Job.findOne({_id:jobId});
        res.status(200).json({job});
    }
    else{
        res.send("No Applicants");
    }
    

}

const getApplicant=async(req,res)=>{

    const jobId=req.params.jobId;
    const studentId=req.params.studentId;
    const job=await Job.findOne({_id:jobId});
    if(!job)
    {
        res.send("Not Found");
    }
    function findApplicantId(element){
        return element.student.toString()===studentId
    }
    const id= job.appliedStudents.find(findApplicantId)
    if(id){
        const student=await Student.findOne({_id:studentId});
        res.status(200).json({student});
    }
    else{
        res.send("No Applicants");
    }

}
const getApplicantCv=async(req,res)=>{
    const jobId=req.params.jobId;
    const studentId=req.params.studentId;
    const job=await Job.findOne({_id:jobId});
    if(!job)
    {
        res.send("Not Found");
    }
    function findApplicantId(element){
        return element.student.toString()===studentId
    }
    const id= job.appliedStudents.find(findApplicantId)
    if(id){
        const student=await Student.findOne({_id:studentId});
        res.download(`./cv/${student.username}.pdf`)
    }
    else{
        res.send("No Applicants");
    }
}

const getMyProfile=async(req,res)=>{
const hr= await HR.findOne({username:req.user.username});
if(!hr)
{
    res.send("Not Found");
}

res.status(200).json({profile:hr});
}









module.exports={addCompanyDetails,addJob,getAllJobs,getApplicants,getApplicant,getApplicantCv}