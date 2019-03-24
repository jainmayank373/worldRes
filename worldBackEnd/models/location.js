const mongoose =  require('mongoose');
const Schema =  mongoose.Schema;
const passport = require('passport-local-mongoose');
const locaSchema = new Schema({
    "Restaurant ID":{
        type:Number
    },
    "Country Code":{
        type:Number
    },
    "City":{
        type:String
    },
    "Address":{
        type:String
    },
    "Locality":{
        type:String
    },
    "Locality Verbose":{
        type:String
    },
    "Longitude":{
        type:Number
    },
    "Latitude":{
        type:Number
    }
});


const location =  mongoose.model('Location',locaSchema,'loca');

module.exports = location;