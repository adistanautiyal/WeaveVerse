const express = require("express");
const mongoose = require("mongoose");

const app= express();

main().then((req,res)=>{
    console.log("database connected");

}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/blog');

  
}

app.get("/",(req ,res)=>{
    res.send("home");
});

app.listen(3000,()=>{
    console.log("server working");
});