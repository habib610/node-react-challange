import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { data } from "./data.js";
import productRouter from "./backend/routers/productRouters.js";
import userRouter from "./backend/routers/userRouter.js";
import postRouter from "./backend/routers/postRouters.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect("mongodb://localhost/nodechallange", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.once('open', function() {
    console.log("connected to database")
  });

app.get("/", (req, res) => {
  res.status(200).send("Server is running!");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.use("/api/articles", postRouter)

app.listen(port, () => {
  console.log("listen on port", port);
});
