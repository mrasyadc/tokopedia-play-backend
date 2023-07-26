const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  comment: {
    required: true,
    type: String,
  },
  productId: { type: Schema.Types.ObjectId, ref: "Video", required: true },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Comment", commentSchema);
