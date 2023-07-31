const router = require ("express").Router();
const Book_Controller = require ("../Controller/Book_Controller.js");
const {saveSingleFile}=require ("../Utils/gallery.js");
const {validate_token,validate_role}=require ("../Utils/validate.js");

router.post("/",[validate_token,validate_role,saveSingleFile,Book_Controller.add]);
router.get("/",Book_Controller.all);

router.route("/:id")
.get(Book_Controller.get)
.delete(validate_token,validate_role,Book_Controller.drop)
.patch(validate_token,validate_role,Book_Controller.patch)

module.exports = router;