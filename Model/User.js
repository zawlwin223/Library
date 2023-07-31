const mongoose = require ("mongoose");
const {Schema} = mongoose;

const User_Schema = new Schema({
    name:{type:String,require:true},
    Email:{type:String,require:true},
    ph_no:{type:Number,require:true},
    password:{type:String,require:true,unique:true},
    role:{type:String},
    token:{type:String,require:true},
    created:{type:Date,default:Date.now}
})

const User = mongoose.model("User",User_Schema);
module.exports = User;