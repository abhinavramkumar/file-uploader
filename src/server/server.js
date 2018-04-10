const express = require("express");
const multer = require("multer");
const mongojs = require("mongojs");
const moment = require("moment");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "..", "build");

app.use(express.static(publicPath));

// Multer Configuration
const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    const date = moment();
    console.log(file);
    cb(null, `${date}-${file.originalname}`);
  },
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  }
});

const uploadSingle = multer({
  storage: storage
}).single("file-drop");

const uploadMultiple = multer({
  storage: storage
}).array("file-drop", 10);

// Route All GET requests to index.html
app.get("*", (req, res, next) => {
  res.sendFile(path.join(publicPath, "index.html"));
  next();
});

// POST request routes file to multer and sends data to mongoDB
app.post("/upload", (req, res) => {
  uploadSingle(req, res, e => {
    if (e) {
      let error = new Error(e);
      console.log(error);
    } else {
      console.log("File Uploaded");
      res.status(200);
    }
  });
});

// Initialize Server
app.listen(8800, () => console.log("Server Running at Port 8800"));
