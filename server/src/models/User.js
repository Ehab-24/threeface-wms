const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    maxLength: 320,
  },
  password: {
    type: String,
    required: true,
    maxLength: 127,
  }, 
  imageUrl: {
    type: String,
    required: true,
    maxLength: 500,
  },
});

module.exports = mongoose.model("User", UserSchema);
