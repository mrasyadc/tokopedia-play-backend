const express = require("express");
const Product = require("../models/product");

const router = express.Router();

router.get("/", async (req, res) => {
  const newProduct = new Product({
    title: "A",
    productURL: "ABC.com",
    price: 100,
  });

  try {
    const productToSave = await newProduct.save();
    res.status(200).json(productToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
