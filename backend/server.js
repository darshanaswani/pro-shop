const express = require("express");
const products = require("./data/products");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

app.use(cors());

connectDB();

app.get("/", (req, res) => {
  console.log("root path");
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => {
    return p._id === req.params.id;
  });

  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
