import express from "express";
import postRoutes from "./routes/post.js";

const app = express();

app.use(express.json());
app.use("/api/posts", postRoutes);
app.listen(3001, () => {
  console.log("Connected!");
});
