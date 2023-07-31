const router = require ("express").Router();
const User_Controller = require ("../Controller/User_Controller.js");
const {generateToken} = require ("../Utils/helper.js");

router.post("/register",User_Controller.register);
router.post("/login",User_Controller.login)

module.exports = router;