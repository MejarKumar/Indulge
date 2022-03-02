const mongoose = require("mongoose");
const companySchema = mongoose.Schema({
   companyName:{
       type:String,
       reqired:true,
   },
   category:{
    type:String,
    reqired:true,
   },
   about:{
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
