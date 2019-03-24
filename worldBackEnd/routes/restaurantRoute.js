const express = require('express');

const restauraRoute = express.Router();

const mongoose = require('mongoose');
const authenticate =require('../auth/userAuth');
const  restauraModel =require('../models/restaurants');
restauraRoute.route('/')
        .get((req,res,next)=>{

            restauraModel.find({})
                .then((data)=>{
                        res.json(data);
                })

        });
            
restauraRoute.route('/search/Cuisines')
        .get((req,res,next)=>{
                restauraModel.find({Cuisines:req.body.Cuisines})
                    .then((result)=>{
                        res.json(result);
                    })       
                    .catch(err=>next(err))
        });
                
restauraRoute.route('/search/name')
        .get((req,res,next)=>{
                restauraModel.find({ "Restaurant Name" : req.body["Restaurant Name"]})
                    .then((result)=>{
                        res.json(result);
                    })       
                    .catch(err=>next(err))
        })
module.exports = restauraRoute;

