const mongoose = require ("mongoose");
const {Schema} = mongoose;

const Tag_Schema = new Schema({
    name:{type:String,require:true,unique:true},
    created:{type:Date,default:Date.now}
})

const Tag = mongoose.model("Tag",Tag_Schema);

module.exports = Tag ;