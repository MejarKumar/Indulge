const mongoose = require("mongoose");
const hrSchema = mongoose.Schema({
    username:{
        type:String,
        reqired:true,
    },
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
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company"
    },
    jobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }]
})

module.exports = mongoose.model('HrDetails', hrSchema)