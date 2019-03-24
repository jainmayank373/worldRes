var express = require('express');
var userRouter = express.Router();

const userModel  =  require('../models/userSchema');

const passport =  require('passport');


const authenticate = require('../auth/userAuth');

userRouter.route('/login')
      .get((req,res,next)=>{
            res.statusCode = 400;
            res.json("Operation not supported");
      })
      .post(passport.authenticate('local'),(req,res,next)=>{

                var authToken = authenticate.getToken({username:req.body.username});
                res.json({message:"Login Success",token:authToken});
            
      });

userRouter.route('/signup')
        .get((req,res,next)=>{

              throw new Error("Operation  not Supported");

        })
        .post((req,res,next)=>{
            
              userModel.register(new userModel(req.body),req.body.password,(err,user)=>{

                      if(err){
                            res.send("User exist");
                      }
                          else {
                                passport.authenticate('local')(req,res,()=>{
                                        res.send("user resgisterd");
                                })
                          }

              })
        })

module.exports = userRouter;
