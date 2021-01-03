require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTask,
} = require("./controllers/taskControllers");

const server = express();

// middleware
server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:5000",
  })
);

// database
const dbString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ycdxj.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(dbString, dbOptions, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`MongoDB Connected: ${process.env.MONGO_DATABASE}`);
  }
});

// start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// routes
server
  .get("/", getTasks)
  .get("/:id", getTask)
  .post("/create", createTask)
  .post("/update/:id", updateTask)
  .delete("/delete/:id", deleteTask);
