require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const friendInvitationRoutes = require("./routes/friendInvitationRoutes");

const { createSocketServer } = require("./socket/socketServer");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

// register the routes
app.use("/api/auth", authRoutes);
app.use("/api/invite-friend", friendInvitationRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/../client/build")));

  // register the routes
  app.use("/api/auth", authRoutes);
  app.use("/api/invite-friend", friendInvitationRoutes);

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/build/index.html"));
  });
}

const server = http.createServer(app);

// socket connection
createSocketServer(server);

const DB_NAME =
  process.env.NODE_ENV === "production"
    ? process.env.DB_NAME
    : process.env.DB_NAME_DEV;
console.log(DB_NAME);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@lets-chat.tnurt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server started on Port ${PORT}.....`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed. Server not started");
    console.error(err);
  });
