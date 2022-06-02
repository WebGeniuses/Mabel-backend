const router = require("express").Router();
const {CREAT, GET} = require("./controller");

router.get("/posts",GET);

module.exports = router;