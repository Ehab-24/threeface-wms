const mongoose = require("mongoose");

const AssigneeSchema = require("./Assignee");
const AnnouncementSchema = require("./Announcement");

const projectSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    required: true,
    immutable: true,
  },
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    maxLength: 500,
  },
  status: {
    type: String,
    required: true,
    maxLength: 6,
    default: "active",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    required: true,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
    required: true,
  },
  dueAt: {
    type: Date,
    required: true,
  },
  assignees: [AssigneeSchema],
});

module.exports = mongoose.model("Project", projectSchema);