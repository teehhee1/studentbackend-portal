const express = require("express");
const router = express.Router();
const threadController = require("../controllers/threadController");

router.post("/create", threadController.createThread);
router.post("/reply", threadController.replyThread);

module.exports = router;
