const mongoose = require('mongoose');
const schema= mongoose.Schema

const tokenSchema=schema({
    token:{
        type:String,
        required:true,
    }
});

const token = mongoose.model('token',tokenSchema);

module.exports=token;