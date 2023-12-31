let path = require ("path");
let fs = require ("fs");

let saveSingleFile = async (req,res,next)=>{
    if(req.files){
        if(req.files.image){
            let image = req.files.image;
            let name =new Date().valueOf()+"_"+ image.name;
          
            let result= path.dirname(__dirname)
            let image_path = path.join(result,"Public","images",`${name}`);
            console.log(image_path)
            image.mv(image_path,(err)=>{
                console.log(err)
            });
            req.body.image =  `https://booklibraryapi.onrender.com/images/${name}`;
            next()
        }else{
            new Error(next("Need Image File"))
        }
       
    }else{
        new Error(next("Need Image File"))
    }
    
}


// let savePDF = async (req,res,next)=>{
//     if(req.files){
//         if(req.files.pdf_url){
//             let file = req.files.pdf_url;
//             let name =new Date().valueOf()+"_"+ file.name;
          
//             let result= path.dirname(__dirname)
//             let pdf_path = path.join(result,"Public","pdf",`${name}`);
//             file.mv(pdf_path,(err)=>{
//                 console.log(err)
//             });
//             req.body.image =  `https://booklibraryapi.onrender.com/pdf/${name}`;
//             next()
//         }else{
//             new Error(next("Need Image File"))
//         }
       
//     }else{
//         new Error(next("Need Image File"))
//     }
    
// }

let delete_file =async (name)=>{
  
    let result= path.dirname(__dirname)
    let image_path = path.join(result,"Public","images",`${name}`);

   await fs.unlink(image_path,(err)=>{
        console.log(err)
    })
 
}



module.exports = {saveSingleFile,delete_file}