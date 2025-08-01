const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Create a course
router.post('/create', courseController.createCourse);

// Assign students to course
router.post('/assign', courseController.assignStudents);

module.exports = router;
