const router = require("express").Router();
const {verifyTokenAndAuthorization, verifyTokenAndAdmin,verifyToken } = require("../controllers/verifyToken");
const {createOrder,updateOrder,deleteOrder,getOrder,getAllOrders,getIncome} = require("../controllers/order");

router.post("/", verifyToken,createOrder );// CREATE ORDER
router.put("/:id", verifyTokenAndAdmin,updateOrder );// UPDATE ORDER

router.delete("/:id", verifyTokenAndAdmin,deleteOrder );// DELETE ORDER
router.get("/find/:userId",verifyTokenAndAuthorization,getOrder );// GET ORDER
 router.get("/",verifyTokenAndAdmin,getAllOrders );// GET ALL ORDERS
 router.get("/income",verifyTokenAndAdmin,getIncome );// GET ALL ORDERS

module.exports = router;