import express from 'express';
const products = require('../products.json');
const router = express.Router();

router.get('/', (req, res) => {
  const start = Number(req.query.start);
  let end = Number(req.query.end);
  
  if (end - 1 > products.length) {    
    end = products.length
  };
  
  res.send(products.slice(start, end))
});

module.exports = router;
