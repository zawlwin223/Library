const Router = require ("express").Router();
const Author_Controller=require ("../Controller/Author_Controller.js");
const {validate_token,validate_role}=require ("../Utils/validate.js");

Router.get("/",Author_Controller.all);
Router.post("/",validate_token,validate_role,Author_Controller.add);

Router.route("/:id")
.delete(validate_token,validate_role,Author_Controller.drop)
.patch(validate_token,validate_role,Author_Controller.patch)

module.exports = Router;