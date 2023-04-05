const express = require("express");
const User = require("../models/user");
const allRouter = express.Router();
allRouter.get("/", async (req, res) => {
  try {
  const users=await User.find();
  res.status(200).json({
    allusers:users
  })
  } catch (err) {
    res.status(500).json({
      error: "error",
    });
  }
});
module.exports = allRouter;
