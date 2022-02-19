const express=require("express");
const { loginUser, registerUser,UserProfile } = require("../controller/studentController");
const router = express.Router();

router.post('/login',loginUser)
router.post('/register',registerUser)
router.get("/profile/:admNo",UserProfile);

module.exports = router;