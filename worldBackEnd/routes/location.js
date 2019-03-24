const express = require('express');

const restauraRoute = express.Router();

const mongoose = require('mongoose');
const authenticate =require('../auth/userAuth');
const locationModel =require('../models/location');
restauraRoute.route('/')
        .post((req,res,next)=>{
                console.log(req.body,["Restaurant ID"]["Restaurant ID"]);
            locationModel.find({"Restaurant ID":req.body["Restaurant ID"]["Restaurant ID"]})
                .then((data)=>{
                        console.log(data);
                        res.json(data);
                })

        });
            

module.exports = restauraRoute;

