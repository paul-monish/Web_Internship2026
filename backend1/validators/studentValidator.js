const { body } = require("express-validator");

const studentValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("phone")
    .optional()
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone must be between 10 to 15 characters"),
  body("age")
    .optional()
    .isInt({ min: 5, max: 100 })
    .withMessage("Age must be between 5 and 100"),
  body("course").trim().notEmpty().withMessage("Course is required"),
];

module.exports = studentValidator;
