const mongoose =  require('mongoose');
const Schema =  mongoose.Schema;
const passport = require('passport-local-mongoose');
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.plugin(passport);

const user =  mongoose.model('User',userSchema);

module.exports = user;