const bcrypt = require('bcrypt');
const { UserModel } = require('../config/db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Router } = require('express');
const userRouter = Router();

// SignUp Endpoint
    userRouter.post('/signup', async function(req, res){
        const { email , password , fullName ,phoneNum , address} = req.body;
        const hashed_Password = await bcrypt.hash(password , 10);

        try{
            await UserModel.create({
                email,
                password : hashed_Password,
                fullName ,
                phoneNum,
                address
            })
        }
        catch(e){
            return res.status(400).send("User Already Exsists");
        }

        res.json({
            message : "SignUp Successful"
        })
    });

    userRouter.post('/signin', async function(req, res){
       const { email , password } = req.body;
       
       try{
        
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(401).json({
                message : "Please SignUp first !"
            })
        }
        const matchPass = await bcrypt.compare(password , user.password);
        if(matchPass){
           const token =  jwt.sign({
                id : user._id
            }, process.env.JWT_USER_AUTH);

            return res.status(200).json({message :"SignIn Successful" , token : token});
        }
        else{
            res.status(401).json({
                message : "Invalid User Credentials"
            })
        }

       }
       catch(e){
        res.status(500).json({
            mesaage : "Server Error"
        })
       }
    });


module.exports = {
    userRouter : userRouter
}