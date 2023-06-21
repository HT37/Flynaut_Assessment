import { Session } from "../database/models/Session.js";

export async function auth(req, res, next) {
  try {
    // Check if the token cookie exists
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the session token against the Session model and populate the `user` field
    const session = await Session.findOne({ token }).populate("user");
    if (!session) {
      return res.status(401).json({ message: "Invalid session" });
    }

    // Access the user associated with the session
    const user = session.user;

    // Perform any additional authentication checks if necessary

    // Set a message indicating authorization
    res.locals.user = session.user

    // If authentication is successful, move to the next middleware
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: "Unauthorized" });
  }
}
