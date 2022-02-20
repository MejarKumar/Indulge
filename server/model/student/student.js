const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
    name:{
        type:String,
        // reqired:true,
    },
    admNo:{
        type:String,
        reqired:true,
        unique:true,
    },
    phnNo:{
        type:String,
        // reqired:true,
    },
    email:{
        type:String,
        // reqired:true,
    },
    branch:{
        type:String,
    },
    department:{
        type:String,
    },
    course:{
        type:String,
    },
    cgpa:{
        type:String,
        reqired:true
    },
    skills:{
        type:String,
        required:true
    },
    socialLinks:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Student', StudentSchema)
