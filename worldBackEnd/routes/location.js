const express = require('express');

const restauraRoute = express.Router();

const mongoose = require('mongoose');
const authenticate =require('../auth/userAuth');
const locationModel =require('../models/location');
restauraRoute.route('/')
        .post((req,res,next)=>{

            location.find({"Restaurant ID":req.body["Restaurant ID"]})
                .then((data)=>{
                        res.json(data);
                })

        });
            

module.exports = restauraRoute;

