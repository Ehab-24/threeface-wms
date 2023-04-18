import mongoose from 'mongoose';

const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
    immutable: true
  },
  vendors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
    }
  ]
});

export default mongoose.model('Warehouse', WarehouseSchema);
