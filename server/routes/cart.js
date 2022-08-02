const router = require("express").Router();
const {verifyTokenAndAuthorization, verifyTokenAndAdmin,verifyToken } = require("../controllers/verifyToken");
const {createProduct,updateProduct,deleteProduct,getProduct,getAllProducts} = require("../controllers/cart");

router.post("/", verifyToken,createCart );// CREATE PRODUCT
// router.put("/:id", verifyTokenAndAdmin,updateProduct );// UPDATE PRODUCT
// router.delete("/:id", verifyTokenAndAdmin,deleteProduct );// DELETE PRODUCT
// router.get("/find/:id",getProduct );// GET PRODUCT
// router.get("/",getAllProducts );// GET ALL PRODUCTS

module.exports = router;