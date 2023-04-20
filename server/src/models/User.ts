import mongoose from 'mongoose';

const UserShcema = new mongoose.Schema({
  displayName: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false
  },
  warehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Warehouse'
  },
  role: {
    type: String
  },
  photoURL: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
    immutable: true
  },
  lastLogin: {
    type: Date,
    default: () => Date.now(),
    required: true
  },
  verification: {
    code: {
      type: Number
    },
    expiry: {
      type: Number
    }
  }
});

export default mongoose.model('User', UserShcema);
