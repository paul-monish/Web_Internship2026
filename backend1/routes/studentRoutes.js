const express = require("express");
const studentValidator = require("../validators/studentValidator");
const { addStudent } = require("../controllers/studentController");

const router = express.Router();

router.post("/", studentValidator, addStudent);

module.exports = router;
