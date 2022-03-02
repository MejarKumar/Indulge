const express = require("express");
const app = express();
const StudentRoute = require("./router/student");
const hrRoute = require("./router/hr");
const commonRoute = require("./router/common");
const connectDB = require('./config/db')
const cors=require("cors")
require('dotenv').config()
connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/student',StudentRoute);
app.use('/api/hr',hrRoute);
app.use('/api/auth',commonRoute);

app.get("/",(req,res)=>{
    res.json("home page");
})


const port = 5000 || process.env.port;
app.listen(port,()=>{
    console.log(`the server is running on port ${port}`);
})