const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post("/create", courseController.createCourse);
router.post("/assign", courseController.assignStudents);

module.exports = router;
