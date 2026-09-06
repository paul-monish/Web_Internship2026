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

// GET ALL STUDENTS
const getStudents = async (req, res) => {
  try {
    const [students] = await pool.execute(
      `SELECT 
            id,
            name,
            email,
            phone,
            age,
            course,
            address,
            created_at,
            updated_at 
        FROM students
        ORDER BY created_at DESC
        `,
    );
    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET STUDENT BY ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params; //{ id: '1' }
    const [student] = await pool.execute(
      `SELECT 
            id,
            name,
            email,
            phone,
            age,
            course,
            address,
            created_at,
            updated_at 
        FROM students
        WHERE id = ?`,
      [id],
    );
    if (student.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      data: student[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// UPDATE STUDENT
const updateStudent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        // errors: errors.array(),
        message: errors.array()[0].msg,
      });
    }
    const { id } = req.params;
    const { name, email, phone, age, course, address } = req.body;

    // Check if student exists
    const [existingStudent] = await pool.execute(
      "SELECT id FROM students WHERE id=?",
      [id],
    );

    if (existingStudent.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // Check duplicate email
    const [duplicateEmail] = await pool.execute(
      "SELECT id FROM students WHERE email=? AND id!=?",
      [email, id],
    );

    if (duplicateEmail.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already exists for another student",
      });
    }

    await pool.execute(
      ` UPDATE students
            SET 
              name=?, 
              email=?, 
              phone=?, 
              age=?, 
              course=?, 
              address=?
        WHERE id=?
      `,
      [name, email, phone || null, age || null, course, address || null, id],
    );

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const [existingStudent] = await pool.execute(
      "SELECT id FROM students WHERE id=?",
      [id],
    );

    if (existingStudent.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await pool.execute("DELETE FROM students WHERE id=?", [id]);

    // console.log(result);
    // if(result.affectedRows === 0) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Student not found",
    //   });
    // }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
