let path = require ("path");
let fs = require ("fs")
let saveSingleFile = async (req,res,next)=>{
    if(req.files){
        if(req.files.image){
            let image = req.files.image;
            let name =new Date().valueOf()+"_"+ image.name;
            // console.log()
            let image_path = `${__dirname}/Upload/${name}`;
            console.log(image_path)
            image.mv(image_path);
            req.body.image =  `${__dirname}/Upload/${name}`;
            console.log(req.body)
            next()
        }else{
            new Error(next("Need Image File"))
        }
       
    }else{
        new Error(next("Need Image File"))
    }
    
}

let delete_file =async (name)=>{
  
    let path =  `${__dirname}/Upload/${name}`;

   await fs.unlink(path,(err)=>{
        console.log(err)
    })
 
}



module.exports = {saveSingleFile,delete_file}