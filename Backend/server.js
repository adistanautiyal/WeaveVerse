const express = require("express");
const connection=require("./database/db.js")
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/routes.js');
const bodyParser=require('body-parser');

dotenv.config();


const app = express();


app.use(cors({
    origin: 'http://localhost:5173', // without trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options('*', cors());
app.use(express.json());
app.use(bodyParser.json({extended:true}));  
app.use('/',router);


const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


app.listen(3000,()=>{
    console.log("server working");
});



connection(USERNAME,PASSWORD);