import express from 'express';
const products = require('../products.json');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(products.slice(0, 10));
});

module.exports = router;
