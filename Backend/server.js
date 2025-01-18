const express = require("express");
const connection=require("./database/db.js")
const dotenv = require('dotenv');

dotenv.config();


const app = express();
app.use(express.json());


app.get("/",(req ,res)=>{
    res.send("home");
});

app.listen(3000,()=>{
    console.log("server working");
});

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);