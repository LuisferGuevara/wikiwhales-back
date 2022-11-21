const express = require("express");
const Whale = require("./whale.model");
const upload = require("../middlewares/file");
const { deleteFile } = require("../middlewares/deleteFile");
const { isAuth, isAdmin } = require("../middlewares/auth");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res, next) => {
  try {
    const allWhales = await Whale.find().lean();
    return res.status(200).json(allWhales);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const whaleToFind = await Whale.findById(id);
    return res.status(200).json(whaleToFind);
  } catch (error) {
    return next(error);
  }
});
router.get("/getbyname/:name", async (req, res, next) => {
  try {
    const name = req.params.name;
    const whaleToFind = await Whale.findOne({ name: name });
    return res.status(200).json(whaleToFind);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const whale = req.body;
    if (req.file) {
      whale.image = req.file.path;
    }
    const newWhale = new Whale(whale);
    const whaleCreated = await newWhale.save();
    return res.status(200).json(whaleCreated);
  } catch (error) {
    return res.status(500).json("Error creating whale");
  }
});

router.put("/edit/:id", upload.single("image"), async (req, res, next) => {
  try {
    const id = req.params.id;
    const whale = req.body;
    const whaleToEdit = await Whale.findById(id);
    if (req.file) {
      if (whaleToEdit.image) {
        deleteFile(whaleToEdit.image);
      }
      whale.image = req.file.path;
    }
    const whaleModification = new Whale(whale);
    whaleModification._id = id;
    const whaleModificated = await Whale.findByIdAndUpdate(id, whaleModification, {
      returnOriginal: false,
    });
    return res.status(200).json({
      mensaje: "Whale modified!",
      whaleModificated: whaleModificated,
    });
  } catch (error) {
    return next(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const whaleToDelete = await Whale.findByIdAndDelete(id);
    return res.status(200).json("Whale deleted");
  } catch (error) {
    return res.status(500).json("Error deleting whale");
  }
});

module.exports = router;
