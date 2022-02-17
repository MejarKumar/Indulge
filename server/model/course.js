const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
   course:{
       type:String,
       reqired:true,
   }
});
module.exports = mongoose.model('Course', courseSchema)
