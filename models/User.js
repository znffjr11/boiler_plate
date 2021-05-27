const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email:{
        type: String,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    gender:{
        type:Number
    },
    role: {
        type: Number,
        default: 0
    },
    Image:String,
    token:{
        type: String
    },
    tokenExp:{
        type: Number
    }


})

userSchema.pre('save', function( next ))

const User = mongoose.model('User', userSchema)

module.exports ={User}