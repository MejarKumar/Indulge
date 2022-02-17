const express=require("express");
const { loginUser, registerUser } = require("../controller/studentController");
const router = express.Router();

router.post('/login',loginUser)
router.post('/register',registerUser)


module.exports = router;