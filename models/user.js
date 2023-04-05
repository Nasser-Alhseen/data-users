const mongoose =require('mongoose')
const userSchema=mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      loggedin:{
        type:String,
        default:'not logged'
      }
})
module.exports=mongoose.model('User',userSchema,'Users');