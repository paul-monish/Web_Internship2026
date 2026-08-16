const { validationResult } = require("express-validator");
const pool = require("../config/db");
const bcrypt = require("bcryptjs");

// REGISTER
const register = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        // errors: errors.array(),
        message: errors.array()[0].msg,
      });
    }

    const { name, email, password } = req.body;

    const [existingUser] = await pool.execute(
      `SELECT id FROM users WHERE email = ?`,
      [email],
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.execute(
      `INSERT INTO users 
    (name, email, password) 
    VALUES (?, ?, ?)`,
      [name, email, hashedPassword],
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { id: result.insertId, name, email },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { register };
