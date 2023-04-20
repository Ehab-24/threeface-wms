import mongoose from 'mongoose';

const InvitationSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true
  },
  from: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  warehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Warehouses',
    required: true
  },
  role: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending',
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now()
  },
  expiry: {
    type: Date,
    required: true,
    default: () => Date.now() + 1000 * 60 * 60 * 24 * 7 // 7 days
  }
});

InvitationSchema.methods.isExpired = function () {
  return this.expiry.getTime() < Date.now();
};

export default mongoose.model('Invitation', InvitationSchema);
