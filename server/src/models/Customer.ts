import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    warehouse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Warehouse'
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastPurchase: {
        type: Date,
        required: true,
        default: () => Date.now(),
    },
    totalPurchases: {
        type: Number,
        required: true,
        default: 1,
    },
    totalSpent: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        required: true,
        default: () => Date.now(),
        immutable: true,
    },
});

export default mongoose.model("Customer", CustomerSchema);