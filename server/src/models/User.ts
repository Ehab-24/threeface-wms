import mongoose from "mongoose";

const UserShcema = new mongoose.Schema({
    displayName: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    warehouse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Warehouse",
    },
    photoURL: {
        type: String,
    },
    createdAt: {
        type: Date,
        required: true,
        immutable: true
    },
    lastLogin: {
        type: Date,
        required: true,
    }
});

export default mongoose.model("User", UserShcema);