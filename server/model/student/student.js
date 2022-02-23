const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
    name:{
        type:String,
        // reqired:true,
    },
    username:{
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
    },
    appliedJobs:[{job:{type:mongoose.Schema.Types.ObjectId, unique:true},status:{type:Boolean,default:false,reqired:true}}],

});
module.exports = mongoose.model('Student', StudentSchema)
