const express = require("express");
const multer = require("multer");
const mongojs = require("mongojs");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "..", "build");

app.use(express.static(publicPath));

// Route All GET requests to index.html
app.get("*", (req, res, next) => {
  res.sendFile(path.join(publicPath, "index.html"));
  next();
});

// POST request routes file to multer and sends data to mongoDB
app.post("/upload", uploadSingle, (req, res) => {
  res.send("POSTERINO");
});

// Initialize Server
app.listen(8800, () => console.log("Server Running at Port 8800"));
