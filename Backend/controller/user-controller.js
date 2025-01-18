const User = require('../models/user.js');
const bcrypt=require('bcrypt');

const UserSignUp = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(req.body.password, salt)
        const { username, email, password } = req.body;
        
        
        

        if (!username || !email || !password) {
            return res.status(400).json({ msg: 'All fields are required' });
        }

        // Create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        });

        await newUser.save();
        
        return res.status(200).json({ msg: 'sign up successful' })
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({ msg: error.message || 'error occurred while signing up' })
    }
};
module.exports={UserSignUp};