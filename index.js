const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const bodyParser=require('body-parser')
const login = require("./routes/login.js");
const deleteUser = require("./routes/delete");
const addUser = require("./routes/adduser");
const allusers = require("./routes/allusers");
const balance = require("./routes/updata_balance");
const user = require("./routes/user");
const app = express();

app.listen(5000);
const uri = 'mongodb+srv://naser0077:naser123@cluster0.lmjquzp.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas', err));

app.use(bodyParser.json());
app.use(morgan('dev'));
//! MiddleWares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})/
app.use("/login", login);
app.use("/deleteuser", deleteUser);
app.use("/adduser", addUser);
app.use("/allusers", allusers);
app.use("/balance", balance);
app.use("/user", user);

