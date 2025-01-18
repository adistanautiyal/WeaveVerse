const User = require('../models/user.js');

const UserSignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Log the received data
        console.log('Received signup data:', { username, email, password });

        if (!username || !email || !password) {
            return res.status(400).json({ msg: 'All fields are required' });
        }

        // Create new user with the correct data
        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();
        
        return res.status(200).json({ msg: 'sign up successful' })
    } catch (error) {
        // Log the error for debugging
        console.error('Signup error:', error);
        return res.status(500).json({ msg: error.message || 'error occurred while signing up' })
    }
};
module.exports={UserSignUp};