const mongoose = require("mongoose");
const credentialSchema = mongoose.Schema({
    admNo:{
        type:String,
        reqired:true,
        unique:true,
    },
    password:{
        type:String,
        reqired:true,
    },
    sensitive:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
    non_sensitive:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student_Sensitive'
    }
})
module.exports = mongoose.model('Credential_student', credentialSchema)