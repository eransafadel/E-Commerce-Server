const router = require("express").Router();
const {verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../controllers/verifyToken");
const { updateUser, deleteUser, getUser, getAllUsers,getUsersStats } = require("../controllers/user");

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/stats", verifyTokenAndAdmin, getUsersStats);



module.exports = router;
