const express=require("express");
const Department = require("../model/department");
const { UserProfile, getAllJobs, getJob, apply,getMyProfile } = require("../controller/studentController");
const {studentRole} =require("../controller/roleController")
const multer= require("multer")
const fs=require("fs");
const { verifyToken } = require("../middleware/verifyToken");
const Job = require("../model/company/job");
const Student = require("../model/student/student");
const router = express.Router();

async function fileExist(path){
    try{
        await fs.access(path)
        return true;
    }catch{
        return false;
    }
}


const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
        if(fileExist(`./cv/${req.params.admNo}.pdf`))
        {
            fs.unlink(`./cv/${req.params.admNo}.pdf`,err=>{
                if(err) console.log(err)
                else console.log("file deleted and uploaded")
            })
        }
        cb(null,'./cv')
    },
    filename:(req,file,cb)=>{
        cb(null,req.params.admNo+'.pdf')
    }
})

const upload =multer({storage:fileStorageEngine})


router.get('/protected',verifyToken,(req,res)=>{res.json({message:"yeh u get through protected route"})})
router.get("/profile/:username",verifyToken,studentRole,getMyProfile)
router.put("/profile/:username",upload.single('cv'),UserProfile);
//================================================
router.post("/add",async(req,res)=>{
    // const department  = req.body.department;
    const newStudent = new Job({
        name:"raman",
        username:"ramaan sain",
        phnNo:"7654447454",
        email:"raman@gail.com",
        branch:"ECE",
        department:"abc",
        course:"abc",
        cgpa:"8.7",
        skills:"everything",
        socialLinks:"abc",
        experience:"thank",
        appliedCompanies:[]
    })

    await newStudent.save();
    res.json(newStudent);
})
//================================================


// router.post("/cv/:admNo",upload.single('cv'),(req,res)=>{
// res.send(req.file)
// })

router.get("/cv/:username",verifyToken,studentRole,(req,res)=>{
    res.download(`./cv/${req.params.username}.pdf`)
})

module.exports = router;

router.get("/allJobs",verifyToken,studentRole,getAllJobs)
router.get("/job/:jobId",verifyToken,studentRole,getJob)
router.post("/job/apply/:jobId",verifyToken,studentRole,apply)