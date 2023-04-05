const express = require("express");
const User = require("../models/user");
const addRouter = express.Router();
addRouter.post("/", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user)
      return res
        .status(404)
        .json({ message: "there is a user with this name" });
    const newUser =  User({
      email: req.body.email,
      password: req.body.password,
    })
    await newUser.save()
    return res.status(200).json({
      message: "new user has been created",
      email: newUser.email,
      password: newUser.password,
    });
  } catch (err) {
    res.status(500).json({
      error: "error",
    });
  }
});
module.exports = addRouter;
