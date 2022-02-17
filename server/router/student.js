const express=require("express");
const router = express.Router();

router.get("/student_register",(req,res)=>{
    res.json("student register");
})

module.exports = router;