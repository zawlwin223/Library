const mongoose = require ("mongoose");
const {Schema} = mongoose;

const Category_Schema = new Schema({
    name:{type:String,require:true,unique:true},
    created:{type:Date,default:Date.now}
})

const Category = mongoose.model("Category",Category_Schema);

module.exports = Category ;