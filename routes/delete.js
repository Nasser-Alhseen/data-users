const express = require("express");
const User = require("../models/user");
const deleteRouter = express.Router();
deleteRouter.post("/", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
     
    });
    if (!user) return res.status(404).json({ message: "user not found" });
    await User.deleteOne({email:req.body.email})
    res.status(200).json({
        message:'user deleted'
    })
   
  } catch (err) {
    res.status(500).json({
      error: "error",
    });
  }
});
module.exports = deleteRouter;
