const express = require("express");
const app = express();
const StudentRoute = require("./router/student");


app.use(StudentRoute);

app.get("/",(req,res)=>{
    res.json("home page");
})


const port = 3000 || process.env.port;
app.listen(port,()=>{
    console.log(`the server is running on port ${port}`);
})