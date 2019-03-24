const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passportJwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const webToken = require('jsonwebtoken');
const  User = require('../models/userSchema');

exports.local =  passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken =  (user)=>{
        return webToken.sign(user,"1234567890-9876543210",{expiresIn:3600});

}

var opts={}
    opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey="1234567890-9876543210";


exports.jwtPassport = passport.use(new passportJwtStrategy(opts,(jwt_payload,done)=>{

                console.log("Hello",jwt_payload);
                User.findOne({username:jwt_payload.username})
                            .then((user)=>{
                            console.log("hello");
                             if(user){
                                  return done(null,user);
                            }
                            else {
                                  return done(null,false);
                            }
                    })
                    .catch(err=>done(err,false))
                   
}));

exports.verifyUser = passport.authenticate('jwt');