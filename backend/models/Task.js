const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },

    topic: {
      type: String,
      required: true,
    },

    deadline: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },

    progress: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);