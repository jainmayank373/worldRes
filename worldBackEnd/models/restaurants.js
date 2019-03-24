const mongoose =  require('mongoose');
const Schema =  mongoose.Schema;
const passport = require('passport-local-mongoose');
const restSchema = new Schema({
    "Restaurant ID":{
        type:Number,
        required:true
    },
    "Restaurant Name":{
        type:String,
        required:true
    },
    Cuisines:{
        type:String,
        required:true
    },
    "Average Cost for two":{
        type:Number
    },
    Currency:{
        type:Number
    },
    "Has Table booking":{
        type:String
    },
    "Has Online delivery":{
        type:String
    }
    ,
    "Aggregate rating":{
        type:Number
    },
    "Rating color":{
        type:String
    },
    "Rating text":{
        type:String
    },
    "Votes":{
        type:Number
    }

});


const restaura =  mongoose.model('Restaurant',restSchema,'info');

module.exports = restaura;