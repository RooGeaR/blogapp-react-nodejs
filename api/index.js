import express from "express";
import postRoutes from "./routes/post.js";

const app = express();

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

app.use(express.json());
app.use("/api/posts", postRoutes);
app.listen(3001, () => {
  console.log("Connected!");
});
