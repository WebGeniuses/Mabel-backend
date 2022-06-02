const router = require("express").Router();
const { CREAT, UPDATE} = require("./controller")
router.post("/create", CREAT);
// router.put("/update", UPDATE);
module.exports = router