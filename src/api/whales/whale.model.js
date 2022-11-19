const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const whaleSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    image: {
      type: String,
      required: true,
      default: "https://assets.stickpng.com/images/58ac47d6f86c9c2eea74c4f0.png",
    },
    scientificName: { type: String, required: false, trim: true },
    length: { type: String, required: false },
    wieght: { type: String, required: false },
    description: { type: String, requiered: true, trim: true },
  },
  {
    timestamps: true,
  }
);
const Whale = mongoose.model("whales", whaleSchema);
module.exports = Whale;
