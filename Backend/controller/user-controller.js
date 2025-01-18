const User = require('../models/user.js');

export default userSignUp=async(req,res)=>{
    try{
        const user= req.body;
    const newUser = new User(user);
    await newUser.save();
    
    return res.status(200).json({msg:'sign up successful'})
    }catch(error){
       return res.status(500).json({msg:'error occured'})

    }
}