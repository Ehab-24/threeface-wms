const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
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
  parent: {
    // ! Remove 'ref'
    id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      immutable: true,
    },
    ref: {
      type: String,
      required: true,
      immutable: true,
    },
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
});
