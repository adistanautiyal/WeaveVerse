const express=require('express');
const router=express.Router();
const {UserSignUp}=require('../controller/user-controller');
const{UserLogIn}=require('../controller/user-controller');


router.post('/signup',UserSignUp);
router.post('/login' ,UserLogIn);

module.exports=router;