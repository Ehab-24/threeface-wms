import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    warehouse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Warehouses'
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: () => Date.now(),
        immutable: true,
    },
});

export default mongoose.model("Product", ProductSchema);