let fs = require ("fs");
let {password_hash}=require ("../Utils/helper.js")
let DB = require("../Model/User");
let migrate =async ()=>{
    let read = fs.readFileSync("./Migrator/admin_json.json");
    let data = read.toString();
    let result=JSON.parse(data);
    let pass_hash = password_hash(result.password)
   result.password = pass_hash;
    await new DB(result).save()

}

module.exports = {migrate}