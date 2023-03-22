const mongoose = require("mongoose");

const CommentSchema = require("./Comment");

const AnnouncementSchema = new mongoose.Schema({
  owner: {
    uid: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
      required: true,
      immutable: true,
    },
    name: {
      type: String,
      required: true,
      immutable: true,
    },
  },
  projectId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "projects",
    required: true,
    immutable: true,
  },
  text: {
    type: String,
    required: true,
    maxLength: 500,
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
  comments: [CommentSchema],
});


module.exports = mongoose.model("Announcement", AnnouncementSchema);