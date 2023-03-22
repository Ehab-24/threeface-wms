const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    required: true,
    immutable: true,
  },
  role: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    immutable: true,
  },
  imageUrl: {
    type: String,
    required: true,
    immutable: true,
  },
});
