const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const bodyParser=require('body-parser')
const login = require("./routes/login.js");
const deleteUser = require("./routes/delete");
const addUser = require("./routes/adduser");
const allusers = require("./routes/allusers");
const app = express();

app.listen(5000);
mongoose.connect('mongodb://localhost/data-users',{  useNewUrlParser: true,
    useUnifiedTopology: true,}).then(_ => console.log("Connected !")).catch(err => console.log("Error" + err.toString()))

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
app.use("/deleteUser", deleteUser);
app.use("/addUser", addUser);
app.use("/allusers", allusers);

