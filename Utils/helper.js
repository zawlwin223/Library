const jwt = require ("jsonwebtoken");
const bcrypt = require ("bcrypt");


let FMSG = (res,msg,result=[])=>{
  let msg_obj = new Object();
  msg_obj["Message"] = msg;
  msg_obj["Result"] = result;

 res.status(200).send(JSON.stringify(msg_obj));
};

let generateToken = async (reqData)=>{
  let payload = JSON.stringify(reqData)
  let token =jwt.sign(payload,process.env.Private_Key);
  return token;
}

let password_hash =  (plainPassword)=>{
  const hash = bcrypt.hashSync(plainPassword,10);
  return hash;
}

let compare_password = async (plainPassword,hashPassword)=>{
 let result = await bcrypt.compare(plainPassword, hashPassword);
 return result
 
}

module.exports = {FMSG , generateToken,password_hash,compare_password}