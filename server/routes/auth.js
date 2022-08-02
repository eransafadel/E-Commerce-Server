const router = require("express").Router();
const { register,login } = require("../controllers/auth");

router.post("/register",register);
router.post("/login",login);
console.log("1");
module.exports = router;
