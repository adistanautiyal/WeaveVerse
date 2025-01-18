const express=require('express');
const router=express.Router();
const {UserSignUp}=require('../controller/user-controller');


router.post('/signup',UserSignUp);

module.exports=router;