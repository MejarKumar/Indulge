const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
    profile:{
        type:String,
        reqired:true,
    },
    description:{
        type:String,
        reqired:true,
    },
    eligible_branch:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"Branch"}
    ],
    cutOffGpa:{
        type:String,
        reqired:true,
    },
    ctc:{
        type:String,
        reqired:true,
    },
    placeOfPosting:{
        type:String,
        reqired:true,
    },
    tenure:{
        type:String,
        reqired:true,
    },
    skillsRequired:{
        type:String,
        reqired:true,
    },
    resumeShortlisting:{
        type:Boolean,
        reqired:true,
    },
    typeOfTest:{
        type:String,
        reqired:true,
    },
    otherQualificationRounds:{
        type:String,
        reqired:true,
    },
    finalNote:{
        type:String,
    },
    appliedStudents:[{student:{type:mongoose.Schema.Types.ObjectId, unique:true},status:{type:Boolean,default:false,required:true}}]
})

module.exports = mongoose.model('Job', jobSchema)