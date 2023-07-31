const DB = require ("../Model/User.js");
const helper = require ("../Utils/helper.js");

const register = async (req,res,next)=>{
    let name = await DB.findOne({name:req.body.name});
    if(name){
        new Error(next("Name already exists"));
    }else{
       let hash_password = helper.password_hash(req.body.password);
        req.body.password = hash_password;
        console.log(req.body);
        let result=await new DB(req.body).save();
        helper.FMSG(res,"Register success",result)
    }
}

const login = async (req,res,next)=>{
    let Ph_no = await DB.findOne({ph_no:req.body.ph_no});
    if(Ph_no){
        let hash_password = Ph_no.password;
        let plain_password =req.body.password; 
        let compare = await helper.compare_password(plain_password,hash_password);
        console.log(compare);
        if(compare){
         
            let result = await DB.findOne({ph_no:req.body.ph_no}).select("-password -created -__v");
            let token= await helper.generateToken(result);
            result.token = token;
            helper.FMSG(res,"Login Success",result)
           
        }else{
           new Error(next("Passwod is incorrect"))
        }    
    }else{
        new Error(next("Ph_no is incorrect"))
    }
  
}

module.exports = {register,login}