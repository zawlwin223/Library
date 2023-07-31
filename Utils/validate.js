let jwt = require ("jsonwebtoken");

let validate_token = async(req,res,next)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization.split(" ")[1];
        if(token){
            jwt.verify(token,process.env.Private_Key, function(err, decoded) {
                req.user = decoded;
                next(); // bar
              });
        }else{
            new Error(next("Need Token"))
        }
   
    }else{
       new Error(next("Need Token"))
    }

}

let validate_role = async (req,res,next)=>{
    let role = req.user.role;
    if(role=="Admin"){
       next()
    }else{
        new Error(next("Need Token"))
    }
   
    
}

module.exports = {validate_token,validate_role}