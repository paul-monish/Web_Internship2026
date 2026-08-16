require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { register } = require("./controllers/authController");
const { registerValidator } = require("./validators/authValidator");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/api/register", registerValidator, register);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
