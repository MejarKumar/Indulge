const express=require("express");
const {login,register} = require("../controller/auth");
const { addCompanyDetails,addJob } = require("../controller/hrController");
const { hrRole } = require("../controller/roleController");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();
router.post('/login',login)
router.post('/register',register)


router.post("/addCompanyDetails",verifyToken,hrRole,addCompanyDetails)
router.post("/addJob",verifyToken,hrRole,addJob);