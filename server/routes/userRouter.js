const express = require("express");
const {
  registerController,
  loginController,
  alluser,
  logout,
} = require("../controller/userController");
const { isAuthenticated } = require("../middlware/isAuthenticated");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/all", isAuthenticated, alluser);
router.get("/logout", logout);
module.exports = router;
