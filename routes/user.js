const express = require("express");
const User = require("../models/user");
const allRouter = express.Router();
allRouter.get("/", async (req, res) => {
  try {
  const user=await User.find({email:req.body.email});
  res.status(200).json({
    allusers:user
  })
  } catch (err) {
    res.status(500).json({
      error: "error",
    });
  }
});
module.exports = allRouter;
