const express = require("express");
const app = express();
const StudentRoute = require("./router/student");
const companyRoute = require("./router/company");
const connectDB = require('./config/db')
require('dotenv').config()
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/student',StudentRoute);
// app.use('/api/company',companyRoute);

app.get("/",(req,res)=>{
    res.json("home page");
})


const port = 3000 || process.env.port;
app.listen(port,()=>{
    console.log(`the server is running on port ${port}`);
})