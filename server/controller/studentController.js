const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Student_Credential= require("../model/student/credential")
const Branch = require('../model/Branch')
const Course = require('../model/course')
  //===============Register Student==================
const registerUser = asyncHandler(async (req, res) => {
    const {  admNo, password } = req.body
  
    if ( !admNo || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    const userExists = await Student_Credential.findOne({ admNo })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await Student_Credential.create({
      admNo,
      password: hashedPassword,
    })
  
    if (user) {
      res.status(201).json({
        _id: user.id,
        admNo: user.admNo,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })
  //===============Register Student===============

  //===============Login Student==================
  const loginUser = asyncHandler(async (req, res) => {
    const { admNo, password } = req.body
    const user = await Student_Credential.findOne({ admNo })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        admNo: user.admNo,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid credentials')
    }
  })
  
  //===============Login Student==================

  //===================Generate Token=============
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }
  

//===================Generate Token===============


const UserProfile=asyncHandler(async(req,res)=>{
  const admNo=req.params.admNo
  const {branch, course,department,email,phnNo,name} =req.body
   await Student_Credential.findOneAndUpdate({admNo},{branch,course,department,email,name,phnNo})

  const user =   await Student_Credential.findOne({admNo});
  console.log(user.branch)
  res.json(user);
})


module.exports = {
  registerUser,
  loginUser,
  UserProfile
}