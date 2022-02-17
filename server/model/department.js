const mongoose = require("mongoose");
const departmentSchema = mongoose.Schema({
   department:{
       type:String,
       reqired:true,
   }
});
module.exports = mongoose.model('Department', departmentSchema)
