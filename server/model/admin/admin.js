const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
   username:{
       type:String,
       reqired:true,
   },
   password:{
    type:String,
    reqired:true,
   }
});
module.exports = mongoose.model('Admin', adminSchema)
