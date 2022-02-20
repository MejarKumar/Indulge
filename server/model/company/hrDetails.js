const mongoose = require("mongoose");
const hrSchema = mongoose.Schema({
    name:{
        type:String,
        reqired:true,
    },
    phnNo:{
        type:String,
        reqired:true,
    },
    email:{
        type:String,
        reqired:true,
        unique:true
    },
    password:{
        type:String,
        reqired:true,
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company"
    }
})

module.exports = mongoose.model('HrDetails', hrSchema)