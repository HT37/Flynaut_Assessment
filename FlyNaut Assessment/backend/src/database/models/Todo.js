import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    timestamps: true
})

const Todo = mongoose.model("todo", todoSchema);

export {
    Todo
}