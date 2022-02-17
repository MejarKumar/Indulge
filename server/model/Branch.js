const mongoose = require("mongoose");
const branchSchema = mongoose.Schema({
   branch:{
       type:String,
       reqired:true,
   }
});
module.exports = mongoose.model('Branch', branchSchema)
