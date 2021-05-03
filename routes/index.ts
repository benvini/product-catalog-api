import express from "express";
const products = require("../products.json");
import { Product } from "./types";
const router = express.Router();

router.get("/", (req, res) => {
  const start = Number(req.query.start);
  let end = Number(req.query.end);

  if (end - 1 > products.length) {
    end = products.length;
  }

  res.send(products.slice(start, end));
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log("id", id);
  const product = products.filter((product: Product) => product.id === id);
  res.send(product[0]);
});

module.exports = router;
