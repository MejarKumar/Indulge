const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Company=require("../model/company/companyDetail")
const HR=require("../model/company/hrDetails")
const Job = require('../model/company/job')


const addCompanyDetails=async(req,res)=>{
const {name,phnNo,email,companyName,companyCategory,websiteLink}=req.body

const newCompany =await Company.create({
    name:companyName,
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
    res.status(200).json({message:"successfully added details",hr:nweHr,company:newCompany})

}


const addJob=async(req,res)=>{

    const hr=await HR.findOne({username:req.user.username})
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











module.exports={addCompanyDetails,addJob}