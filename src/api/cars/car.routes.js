const express = require("express");
const Car = require("./cars.model");
const upload = require("../middlewares/file");
const { deleteFile } = require("../middlewares/deleteFile");
const { isAuth, isAdmin } = require("../middlewares/auth");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res, next) => {
  try {
    const allCars = await Car.find().lean();
    return res.status(200).json(allCars);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const carToFind = await Car.findById(id);
    return res.status(200).json(carToFind);
  } catch (error) {
    return next(error);
  }
});
router.get("/getbyname/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const carToFind = await Car.findOne({ name: name });
    return res.status(200).json(carToFind);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const car = req.body;
    if (req.file) {
      car.image = req.file.path;
    }
    const newCar = new Car(car);
    const carCreated = await newCar.save();
    return res.status(200).json(carCreated);
  } catch (error) {
    return res.status(500).json("Error creating car");
  }
});

router.put("/edit/:id", upload.single("image"), async (req, res, next) => {
  try {
    const id = req.params.id;
    const car = req.body;
    const carToEdit = await Car.findById(id);
    if (req.file) {
      if (carToEdit.image) {
        deleteFile(carToEdit.image);
      }
      car.image = req.file.path;
    }
    const carModification = new Car(car);
   carModification._id = id;
    const carModificated = await Car.findByIdAndUpdate(id, carModification, {
      returnOriginal: false,
    });
    return res.status(200).json({
      mensaje: "Car modified!",
      carModificated: carModificated,
    });
  } catch (error) {
    return next(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const carToDelete = await Car.findByIdAndDelete(id);
    return res.status(200).json("Car deleted");
  } catch (error) {
    return res.status(500).json("Error deleting car");
  }
});

module.exports = router;
