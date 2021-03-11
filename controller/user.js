const User = require("../models/user");

exports.signup = (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save((err, user) =>{
        if(err){
            console.log(err);
            res.json({err});
        }else{
            res.json({user});
        }
    });
};