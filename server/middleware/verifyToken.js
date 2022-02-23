const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.verifyToken = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(400).json({message:"unauthorised"})
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
    return res.status(404).json({message:"something went wrong"})
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(404).json({message:"something went wrong"})
  }
};