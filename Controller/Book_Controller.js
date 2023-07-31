const DB = require ("../Model/Book.js");
const helper  =require ("../Utils/helper.js")
let {delete_file}=require ("../Utils/gallery.js")
let add = async(req,res,next)=>{
    console.log(req.body)
    let name = await DB.findOne({name:req.body.name});
    if(name){
        new Error(next("Name already Exists"));
        
    }else{
        let result = await new DB(req.body).save();
        helper.FMSG(res,"Book Added",result)
    }
}

let all = async (req,res,next)=>{
    let result = await DB.find().populate("category author tag");
    helper.FMSG(res,"All Book Info",result)
}

let get = async (req,res,next)=>{
    let id = await DB.findById(req.params.id);
    if(id){
        let result = await DB.findById(id._id);
        helper.FMSG(res,"Book Info",result);
    }else{
        new Error(next("Id is wrong"))
    }
}

let drop = async (req,res,next)=>{
    let id = await DB.findById(req.params.id);
    if(id){
        // await DB.findByIdAndDelete(id._id);
        let image_name =id.image;
        delete_file(image_name)
        helper.FMSG(res,"Deleted")
    }else{
        new Error(next("Id is incorrect"))
    }
}

let patch = async (req,res,next)=>{
    let id = await DB.findById(req.params.id);
    if(id){
        await DB.findByIdAndUpdate(id._id,req.body);
        let result =await DB.findById(id._id);
        helper.FMSG(res,"Updated Succefully",result)
    }else{
        new Error(next("Id is incorrect"))
    }
}

module.exports = {add,all,get,drop,patch}