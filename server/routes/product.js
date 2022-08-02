const router = require("express").Router();
const {verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../controllers/verifyToken");

const {createProduct} = require("../controllers/product");


//CREATE PRODUCT
router.post("/", verifyTokenAndAdmin,createProduct );

 




module.exports = router;