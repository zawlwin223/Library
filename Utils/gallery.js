let path = require ("path");
let fs = require ("fs")
let saveSingleFile = async (req,res,next)=>{
    if(req.files){
        if(req.files.image){
            let image = req.files.image;
            let name =new Date().valueOf()+"_"+ image.name;
          
            let result= path.dirname(__dirname)
            let image_path = path.join(result,"Public",`${name}`);
            image.mv(image_path);
            req.body.image =  `https://booklibraryapi.onrender.com/${name}`;
            console.log(req.body)
            // next()
        }else{
            new Error(next("Need Image File"))
        }
       
    }else{
        new Error(next("Need Image File"))
    }
    
}

let delete_file =async (name)=>{
  
    let path =  `./Public/${name}`;

   await fs.unlink(path,(err)=>{
        console.log(err)
    })
 
}



module.exports = {saveSingleFile,delete_file}