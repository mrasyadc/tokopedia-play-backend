const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// router.get("/", async (req, res) => {
//   const newProduct = new Product({
//     title: "A",
//     productURL: "ABC.com",
//     price: 100,
//   });

//   try {
//     const productToSave = await newProduct.save();
//     res.status(200).json(productToSave);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

router.get("/", (req, res) => {
  try {
    // call services to get all list video
    res.status(200).json({ message: "Hello from server" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/products/:id", (req, res) => {
  try {
    const videoId = req.params.id;
    res.status(200).json({ videoId: videoId });
    // call services to get all products list in a video
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/comments/:id", (req, res) => {
  try {
    const videoId = req.params.id;
    res.status(200).json({ videoId: videoId });
    // call services to get all list comment in a video
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/comment", (req, res) => {
  try {
    const { username, comment, videoId } = req.body;
    if (!username || !comment || !videoId) {
      throw new Error("Insufficient Parameter");
    }

    // call service to post comment

    res
      .status(200)
      .json({ username: username, comment: comment, videoId: videoId });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
