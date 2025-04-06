const express = require("express");
const router = express.Router();
const register_controller = require("../controllers/register.controller.js");

// POST request
router.post("/post", appointments_controller.post_appointment);
router.get("/", appointments_controller.get_appointments);

module.exports = router;
