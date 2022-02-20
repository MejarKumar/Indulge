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

    password:{
        type:String,
        reqired:true,
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
        type:mongoose.Schema.Types.ObjectId,
        ref:'Branch'
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department'
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    },
});
module.exports = mongoose.model('Student', StudentSchema)
