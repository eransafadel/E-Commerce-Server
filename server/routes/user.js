const router = require("express").Router();

const { verifyToken } = require("../controllers/user");
router.put("/:id",verifyToken);


module.exports = router;
