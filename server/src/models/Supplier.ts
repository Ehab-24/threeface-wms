import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    warehouse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Warehouses'
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastSupplied: {
        type: Date,
        required: true,
        default: () => Date.now(),
    },
    totalSupplies: {
        type: Number,
        required: true,
        default: 1,
    },
    totalSold: {
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

export default mongoose.model("Supplier", SupplierSchema);