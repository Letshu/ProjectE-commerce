const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        trim: true,
    },
    salt: String, //used to generate hash password
    role: { // 1 is for admin and 0 is user
        type: Number,
        default: 0
    },
    history: {
        type: array,
        default: []
    }
}, {
    timestamps: true
})

// Virtual fields

userSchema.virtual('password').set(function(password){
    this._password =password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
}).get( function(){
    return this._password;
})