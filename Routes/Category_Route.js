const Router = require ("express").Router();
const Category_Controller=require ("../Controller/Category_Controller.js");
const {validate_token,validate_role}=require ("../Utils/validate.js");
Router.get("/",Category_Controller.all);
Router.post("/",validate_token,validate_role,Category_Controller.add);

Router.route("/:id")
.get(Category_Controller.get)
.delete(validate_token,validate_role,Category_Controller.drop)
.patch(validate_token,validate_role,Category_Controller.patch)

module.exports = Router;