import { Router } from "express";
import { User } from "../database/models/User.js";
import bcrypt from "bcrypt";

const userRouter = Router();

userRouter.post("/create", async (req, res) => {
    const body = req.body
    const user = new User()
    user.email = body.email
user.username = body.username
user.password = await bcrypt.hash(body.password, 10)
await user.save()
    res.send(user)
    
})


export default userRouter