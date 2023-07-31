const Router = require ("express").Router();
const Tag_Controller=require ("../Controller/Tag_Controller.js");
const {validate_token,validate_role}=require ("../Utils/validate.js");
Router.get("/",Tag_Controller.all);
Router.post("/",validate_token,validate_role,Tag_Controller.add);

Router.route("/:id")
.get(Tag_Controller.get)
.delete(validate_token,validate_role,Tag_Controller.drop)
.patch(validate_token,validate_role,Tag_Controller.patch)

module.exports = Router;