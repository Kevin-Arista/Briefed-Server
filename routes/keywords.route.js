const express = require("express");
const router = express.Router();
const summarize_controller = require("../controllers/keywords.controller.js");

router.post("/post", summarize_controller.summarize);

module.exports = router;
