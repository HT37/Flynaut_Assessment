import app from "./app.js";
import http from "node:http"
import { Server } from "socket.io";
import { PORT } from "../config/index.js"

const webServer = http.createServer(app);
const ioServer = new Server(webServer);

ioServer.on("connection", (socket) => {
  console.log("client connected");
});

webServer.listen(PORT, () => {
    console.log(`Sever is up and running on port ${PORT} `)
})

export {
    webServer
}