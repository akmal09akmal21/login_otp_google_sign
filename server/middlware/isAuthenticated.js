// const jwt = require("jsonwebtoken");

// const checkAuth = async (req, res, next) => {
//   const { token } = req.cookies;

//   if (token) {
//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//       if (err) {
//         res.status(400);
//         throw new Error("Invalid token");
//       }
//       req.userId = user.id;
//       next();
//     });
//   } else {
//     return res.status(401).json({ success: false, message: "Unauthorized" });
//   }
// };

// module.exports = checkAuth;
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

// check is user is authenticated
const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  // Make sure token exists
  if (!token) {
    return res
      .status(401)
      .send({ success: false, message: "login bn kirishingiz kk" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ success: false, message: "login bn kirishingiz kk" });
  }
};
module.exports = { isAuthenticated };
// //middleware for admin
// exports.isAdmin = (req, res, next) => {
//   if (req.user.role === "user") {
//     return next(new ErrorResponse("Access denied, you must an admin", 401));
//   }
//   next();
// };

// import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) =\> {
// const token = req.cookies.token;
// console.log("Token on backend: ", token);

// if (!token) {
// return res.status(401).json({
// message: "You are not authorized!",
// });
// }
// try {
// const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

// req.userId = decoded.id; // Extract user ID from decoded token

// next(); // Proceed to the next middleware
// } catch (error) {
// console.log(error);

// return res.status(403).json({
// message: "Token is not valid!",
// });
// }
// };
