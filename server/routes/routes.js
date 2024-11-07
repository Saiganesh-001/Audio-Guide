const express = require('express')
const router = express.Router();

const { login, signup } = require("../Controller/Auth");

router.post("/signup", signup);
router.post("/signin", login);


module.exports = router;