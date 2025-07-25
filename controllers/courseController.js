const Course = require("../models/Course");

// Create a course
exports.createCourse = async (req, res) => {
  try {
    const { title, description, teacher } = req.body;
    const course = new Course({ title, description, teacher });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Assign students to course
exports.assignStudents = async (req, res) => {
  try {
    const { courseId, studentIds } = req.body;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    course.students.push(...studentIds);
    await course.save();
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
