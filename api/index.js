import express from "express";
import postRoutes from "./routes/post.js";
import multer from "multer";

const app = express();

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  return res.status(200).json(req.file.filename);
});

app.use("/api/posts", postRoutes);
app.listen(3001, () => {
  console.log("Connected!");
});
