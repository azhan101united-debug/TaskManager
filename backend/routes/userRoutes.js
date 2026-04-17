const express = require ("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUsers, getUserById } = require("../controller/userController");

const router = express.Router();

//user management routes
router.get("/", protect, adminOnly, getUsers); //get all users(Admin only)
router.get("/:id", protect, getUserById);     //get specific user

module.exports = router;
