const express = require("express");
const studentValidator = require("../validators/studentValidator");
const {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// All student routes will require authentication
// router.use(authMiddleware);

router.post("/", studentValidator, addStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.put("/:id", studentValidator, updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
