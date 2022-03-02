const User = require("../model/user");


//==================Login================================
exports.login = async (req, res, next) => {
    const { username, password,role } = req.body;
  
    if (!username || !password || !role) {
      return res.status(400).json({"message":"Feilds can't be empty"})
    }
  
    try {
      const user = await User.findOne({ username }).select("+password");
  
      if (!user) {
        return res.status(400).json({"message":"Invalid Credentials"})
      }
  
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return res.status(400).json({"message":"Invalid Credentials"})
      }
  
      const token = user.getSignedJwtToken();
      res.status(200).json({ sucess: true, token ,username});
    } catch (err) {
        return res.status(400).json({"message":"Something went wrong"})
    }
  };
//==================Login================================
//==================Register=============================

exports.register = async (req, res, next) => {
    const { username, password ,role } = req.body;
    const userExists=await User.findOne({username})
    if(userExists)
    {
        return res.status(400).json({message:"user already present"})
    }
    try{
      const user = await User.create({
        username,
        role,
        password,
      });
      const token = user.getSignedJwtToken();
      // await user.save()
      res.status(200).json({ sucess: true,token });
      
    }catch(err){
        return res.status(400).json({"message":"Something went wrong"})
    }
  };
//==================Register=============================


// exports.forgotPassword = async (req, res, next) => {
//     const { username } = req.body;
  
//     try {
//       const user = await User.findOne({ username });
  
//       if (!user) {
//         return res.status(400).json({"message":"Something went wrong"})
//       }
  
//       const resetToken = user.getResetPasswordToken();
  
//       await user.save();
  
//       const resetUrl = `http://localhost:5000/passwordreset/${resetToken}`;
  
//       const message = `
//         <h1>You have requested a password reset</h1>
//         <p>Please make a put request to the following link:</p>
//         <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
//       `;
  
//       try {
//         await sendEmail({
//           to: user.email,
//           subject: "Password Reset Request",
//           text: message,
//         });
  
//         res.status(200).json({ success: true, data: "Email Sent" });
//       } catch (err) {
//         console.log(err);
  
//         user.resetPasswordToken = undefined;
//         user.resetPasswordExpire = undefined;
  
//         await user.save();
  
//         return res.status(400).json({"message":"Something went wrong"})
//       }
//     } catch (err) {
//       next(err);
//     }
//   };