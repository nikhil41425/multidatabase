const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const conn1  = require('../config/users-database')

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
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
})

var ordermodel=conn1.model('User',userSchema)


const User=module.exports=ordermodel

module.exports.getUserById=function(id,callback){
   User.findById(id,callback)
}

module.exports.getUserByUsername=function(username,callback){
    let query={username:username}

    User.findOne(query,callback)
}

module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback)
        })
    })
}

module.exports.comparePassword=function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch)
    })
}