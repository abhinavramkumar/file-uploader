const express = require("express");
const multer = require("multer");
const mongojs = require("mongojs");
const moment = require("moment");
const path = require("path");
const app = express();
const fs = require("fs");
const publicPath = path.join(__dirname, "..", "..", "build");

app.use(express.static(publicPath));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// MongoDB Config
const db = mongojs("mongodb://127.0.0.1:27017/fileUploader");
let collection = mongojs("uploads");

db.on("error", e => {
  console.log(new Error(e));
});
db.on("connect", () => {
  console.log("Database connected");
});

// Multer Configuration
const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    //const date = moment.now();
    cb(null, `${file.originalname}.${file.mimetype.replace(/image\//gi, "")}`);
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
app.get("/app/*", (req, res, next) => {
  res.sendFile(path.join(publicPath, "index.html"));
  next();
});

app.get("/uploads/:name", (req, res, next) => {
  let filename = path.join(__dirname, "..", "uploads", req.params.name);
  fs.readFile(filename, "base64", (err, data) => {
    if (!err) {
      res.send(data);
    }
  });
  //res.sendFile(path.join(__dirname, "..", "uploads", `${req.params.name}`));
});

// POST request routes file to multer and sends data to mongoDB
app.post("/upload", (req, res) => {
  uploadSingle(req, res, e => {
    if (e) {
      console.log(new Error(e));
    } else {
      console.log("File Uploaded. Adding to DB...");
      let { filename, size } = req.file;
      db.uploads.insert({
        filename,
        size
      });
      res.send({
        names: [filename]
      });
    }
  });
});

app.post("/upload-multiple", (req, res) => {
  uploadMultiple(req, res, e => {
    if (e) {
      let error = new Error(e);
      console.log(error);
    } else {
      console.log("File Uploaded");
      let names = [];
      let files = req.files.map(({ filename, size }) => {
        names.concat(filename);
        return {
          filename,
          size
        };
      });

      db.uploads.insert(files);
      res.send({
        names: [...names]
      });
    }
  });
});

// Initialize Server
app.listen(8800, () => console.log("Server Running at Port 8800"));
