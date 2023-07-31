const DB = require ("../Model/Author.js");
const helper = require ("../Utils/helper.js");

let all = async (req,res,next)=>{
   let result = await DB.find();
    helper.FMSG(res,"Get All Authors Name",result)
}

let add = async (req,res,next)=>{
    let name = await DB.findOne({name:req.body.name});
    if(name){
        new Error(next("Name is already in Use"))
    }else{
        let result = await new DB(req.body).save();
        helper.FMSG(res,"Added Author Name",result)
    }
}

let drop = async (req,res,next)=>{
    let id = await DB.findById(req.params.id);
    if(id){
        await DB.findByIdAndDelete(id._id);
        helper.FMSG(res,"Deleted successfully")
    }else{
        new Error(next("Id is incorrect"))
    }
}

let patch = async (req,res,next)=>{
    let id = await DB.findById(req.params.id);
    if(id){
        await DB.findByIdAndUpdate(id._id,req.body);
        let result = await DB.findById(id._id);
        helper.FMSG(res,"Updated Successfully",result)
    }else{
        new Error(next("Id is incorrect"))
    }
}

module.exports = {all,add,drop,patch}