const express=require("express");
const Department = require("../model/department");
const { loginUser, registerUser,UserProfile } = require("../controller/studentController");
const router = express.Router();
const multer= require("multer")
const fs=require("fs")

async function fileExist(path){
    try{
        await fs.access(path)
        return true;
    }catch{
        return false;
    }
}



router.post('/login',loginUser)
router.post('/register',registerUser)
router.put("/profile/:admNo",UserProfile);
router.post("/add",async(req,res)=>{
    const department  = req.body.department;
    const newDep = new Department({
        department
    })

    await newDep.save();
    res.json(newDep);
})

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

router.post("/cv/:admNo",upload.single('cv'),(req,res)=>{
res.send(req.file)
})

router.get("/cv/:admNo",(req,res)=>{
    res.download(`./cv/${req.params.admNo}.pdf`)
})

module.exports = router;