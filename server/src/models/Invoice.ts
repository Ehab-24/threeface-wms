import mongoose from 'mongoose';

const InvoiceSchema = new mongoose.Schema({
  warehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Warehouse'
  },
  customer: {
    type: String
  },
  numProducts: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
    immutable: true
  },
  products: [
    {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ]
});

export default mongoose.model('Invoice', InvoiceSchema);
