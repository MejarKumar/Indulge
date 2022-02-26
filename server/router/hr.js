const express=require("express");
const {login,register} = require("../controller/auth");
const { addCompanyDetails,addJob,getAllJobs, getApplicants, getApplicant, getApplicantCv } = require("../controller/hrController");
const { hrRole } = require("../controller/roleController");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();
router.post('/login',login)
router.post('/register',register)


router.post("/addCompanyDetails",verifyToken,hrRole,addCompanyDetails)
router.post("/addJob",verifyToken,hrRole,addJob);
router.get("/getAllJobs",verifyToken,hrRole,getAllJobs)
router.get("/getAllAplicants/:jobId",verifyToken,hrRole,getApplicants)
router.get("/getApplicant/:jobId/:studentId",verifyToken,hrRole,getApplicant)
router.get("/getApplicantCv/:jobId/:studentId",verifyToken,hrRole,getApplicantCv)


module.exports=router