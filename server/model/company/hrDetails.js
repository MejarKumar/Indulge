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
    }
})

module.exports = mongoose.model('HrDetails', hrSchema)