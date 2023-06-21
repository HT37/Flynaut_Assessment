import mongoose from "mongoose";
import { MONGODB_URI } from "../../config/index.js"

export async function connectToMongoose() {
    await mongoose.connect(MONGODB_URI)
    console.log("Connected to database");

    await import("../database/models/User.js");
    await import("../database/models/Todo.js");
}