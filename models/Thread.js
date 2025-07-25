const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: String,
  replies: [
    {
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      content: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Thread", ThreadSchema);
