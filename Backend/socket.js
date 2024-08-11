// import { Server } from "socket.io";
const { Server } = require("socket.io");

let io;

const init = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTION"],
    },
  });
  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket io is not initialized!");
  }
  return io;
};

module.exports = {
  init: init,
  getIO: getIO,
};
