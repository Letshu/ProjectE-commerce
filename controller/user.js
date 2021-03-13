const User = require("../models/user");
const {errorHandler} = require('../helpers/dbError');

exports.signup = (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save((err, user) =>{
        if(err){
            console.log(err);
            res.json({err:errorHandler(err)});
        }else{
            user.salt = undefined;
            user.hashed_password = undefined; //this is done to not send the salted password back to our database
            res.json({user});
        }
    });
};