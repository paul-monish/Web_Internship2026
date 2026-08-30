const { validationResult } = require("express-validator");
const pool = require("../config/db");

// ADD STUDENT
const addStudent = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        // errors: errors.array(),
        message: errors.array()[0].msg,
      });
    }
    const { name, email, phone, age, course, address } = req.body;
    // Check email
    const [existingStudent] = await pool.execute(
      "SELECT id FROM students WHERE email=?",
      [email],
    );
    if (existingStudent.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Student email already exists",
      });
    }

    const [result] = await pool.execute(
      `INSERT INTO students (name,email,phone,age,course,address) VALUES (?,?,?,?,?,?)`,
      [name, email, phone || null, age || null, course, address || null],
    );

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: {
        id: result.insertId,
        email,
      },
    });
  } catch (error) {
    req.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  addStudent,
};
