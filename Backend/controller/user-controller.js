const { response } = require("express");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Token = require('../models/token.js');

dotenv.config();

const UserSignUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(200).json({ msg: "sign up successful" });
  } catch (error) {
    console.error("Signup error:", error);
    return res
      .status(500)
      .json({ msg: error.message || "error occurred while signing up" });
  }
};


const UserLogIn= async(req,res)=>{
    let user = await User.findOne({username:req.body.username});
    if(!user){
        return res.status(400).json({msg:'username does not match'});
    }
    try{
        let match=await bcrypt.compare(req.body.password, user.password);
        if(match){
            const accessToken=jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn:'15m'});
            const refreshToken=jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({token:refreshToken})
            await newToken.save();

            return res.status(200).json({accessToken:accessToken,refreshToken:refreshToken,username: user.username, email:user.email});

        }else{
            return res.status(400).json({msg:'password does not match'});
        }
    }catch(error){
        return res.status(500).json({mesg:'error while logging in'})
    }
}

module.exports={UserLogIn, UserSignUp };
