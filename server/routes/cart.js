const router = require("express").Router();
const {verifyTokenAndAuthorization, verifyTokenAndAdmin,verifyToken } = require("../controllers/verifyToken");
const {createCart,updateCart,deleteCart,getCart,getAllCarts} = require("../controllers/cart");

router.post("/", verifyToken,createCart );// CREATE CART
router.put("/:id", verifyTokenAndAuthorization,updateCart );// UPDATE CART
router.delete("/:id", verifyTokenAndAuthorization,deleteCart );// DELETE CART
router.get("/find/:userId",verifyTokenAndAuthorization,getCart );// GET PRODUCT
 router.get("/",verifyTokenAndAdmin,getAllCarts );// GET ALL PRODUCTS

module.exports = router;