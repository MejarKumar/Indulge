const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
    cgpa:{
        type:String,
        reqired:true
    },
    cgpaPdf:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    cv_pdf:{
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
module.exports = mongoose.model('User', userSchema)