const mongoose=require('mongoose');

const connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@blogapp.azavf.mongodb.net/?retryWrites=true&w=majority&appName=BlogApp`

    try{
        await mongoose.connect(URL);
        console.log("database connected");
    }catch(error){
        console.log("error occured",error.message)
    }
};

module.exports=connection;