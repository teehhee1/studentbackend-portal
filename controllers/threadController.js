const Thread = require("../models/Thread");

// Create thread
exports.createThread = async (req, res) => {
  try {
    const { course, createdBy, title, content } = req.body;
    const thread = new Thread({ course, createdBy, title, content });
    await thread.save();
    res.status(201).json(thread);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Reply to a thread
exports.replyThread = async (req, res) => {
  try {
    const { threadId, createdBy, content } = req.body;
    const thread = await Thread.findById(threadId);
    if (!thread) return res.status(404).json({ message: "Thread not found" });

    thread.replies.push({ createdBy, content });
    await thread.save();
    res.status(200).json(thread);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
