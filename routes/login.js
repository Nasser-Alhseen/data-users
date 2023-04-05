const express = require("express");
const User = require("../models/user");
const loginRouter = express.Router();
loginRouter.post("/", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) return res.status(404).json({ message: "user not found" });
    if (user.loggedin == "logged")
      return res
        .status(404)
        .json({ message: "there is a user with this account" });
    await User.updateOne(
      { email: req.body.email },
      { $set: { loggedin: "logged" } }
    );
    res.status(200).json({
      message: "user logged in successfuly",
    });
  } catch (err) {
    res.status(500).json({
      error: "error",
    });
  }
});
module.exports = loginRouter;
