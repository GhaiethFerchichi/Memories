// import basic dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./app/routes/posts.js";

// import routing

const app = express();

app.use(express.json());
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/memories";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
  )
  .catch((err) => console.log(err.message));
