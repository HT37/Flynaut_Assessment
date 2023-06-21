import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
})

const Session = mongoose.model("session", sessionSchema);

export {
    Session
}