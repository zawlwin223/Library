const mongoose = require ("mongoose");
const {Schema} = mongoose;

const Author_Schema = new Schema({
    name:{type:String,require:true,unique:true},
    created:{type:Date,default:Date.now}
})

const Author = mongoose.model("Author",Author_Schema);
module.exports = Author ;