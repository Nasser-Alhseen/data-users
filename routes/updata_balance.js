const express=require('express')
const balanceRouter=express.Router();
const User=require('../models/user');


balanceRouter.post('/',async(req,res)=>{
    try{
        const user=await User.find({email:req.body.email});
        if(!user) return res.json(404).json({message:'user not found'});
        const result=await User.updateOne({email:req.body.email},{balance:req.body.balance})
        return res.status(200).json({user:result,message:'balance updated successfully'})
    }catch(e){
        res.status(404).json({message:'error'})
    }
})

module.exports=balanceRouter;