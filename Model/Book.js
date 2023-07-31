const mongoose = require ("mongoose");
const {Schema} = mongoose;

const Book_Schema = new Schema({
    name:{type:String,require:true,unique:true},
    image:{type:String,require:true},
    pdf_url:{type:String,require:true},
    category:{type:Schema.Types.ObjectId,require:true,ref:"Category"},
    author:{type:Schema.Types.ObjectId,require:true,ref:"Author"},
    tag:{type:Schema.Types.ObjectId,require:true,ref:"Tag"},
    created:{type:Date,default:Date.now}

})

const Book = mongoose.model("Book",Book_Schema);
module.exports = Book;