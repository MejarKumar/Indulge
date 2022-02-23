const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        reqired:true,
        unique:true,
    },
    password:{
        type:String,
        reqired:true,
        select: false,
    },
    role:{
        type:String,
        enum:["student","hr","admin","coordinator"],
        required:true
    }
})

UserSchema.pre("save", async function (next) {  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  };


module.exports = mongoose.model('User', UserSchema)