const mongoose = require("mongoose");
// ! const uniqueValidator = require("mongoose-unique-validator");

const AssigneeSchema = require("./Assignee");
const CommentSchema = require("./Comment");

const IssueSchema = new mongoose.Schema({
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
        }
    },
    projectId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "projects",
        required: true,
        immutable: true,
    },
    title: {
        type: String,
        required: true,
        maxLength: 50,
        // unique: true,
        // uniqueCaseInsensitive: true,
    },
    description: {
        type: String,
        maxLength: 500,
    },
    status: {
        type: String,
        required: true,
        default: "active",
        maxLength: 10,
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
    assignees: [AssigneeSchema],
    comments: [CommentSchema],
});
// ! IssueSchema.plugin(uniqueValidator, { message: "Title must be unique" });

module.exports = mongoose.model("Issue", IssueSchema);