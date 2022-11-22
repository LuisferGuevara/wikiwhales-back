const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    image: {
      type: String,
      default: "https://assets.stickpng.com/images/58ac47d6f86c9c2eea74c4f0.png",
    },
    color: { type: String, required: false, trim: true },
    year: { type: Number, required: false },
    description: { type: String, requiered: true, trim: true },
  },
  {
    timestamps: true,
  }
);
const Car = mongoose.model("cars", carSchema);
module.exports = Car;
