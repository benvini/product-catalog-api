import express from "express";
import { get } from "lodash";
const router = express.Router();

import {
  getProducts,
  getProductsByText,
  getProductById,
} from "../shared/utils/products";
import {MAX_PRODUCTS_AMOUNT} from '../constants/constants';

router.get("/", (req, res) => {
  const start = Number(get(req.query, "start", 0));
  const end = Number(get(req.query, "end", 0));

  if ((!start && !end) || end - start > MAX_PRODUCTS_AMOUNT) {
    res.status(400).send("Invalid input");
  }
  const products = getProducts(start, end);
  res.send(products);
});

router.get("/find_products", (req, res) => {
  const userInput = get(req.query, "text", "") as string;

  if (!userInput) {
    res.status(400).send("Invalid input");
  }
  const products = getProductsByText(userInput);
  res.send(products);
});

router.get("/:id", (req, res) => {
  const id = Number(get(req.params, "id", -1));

  if (id === -1) {
    res.status(400).send("Invalid input");
  }
  const product = getProductById(id);
  res.send(product);
});

module.exports = router;
