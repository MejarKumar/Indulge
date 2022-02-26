const mongoose = require("mongoose");
const companySchema = mongoose.Schema({
   name:{
       type:String,
       reqired:true,
   },
   category:{
    type:String,
    reqired:true,
   },
    website:{
        type:String,
        reqired:true,
    },
    jobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }]
});
module.exports = mongoose.model('Company', companySchema)
