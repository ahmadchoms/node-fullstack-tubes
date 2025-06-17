const express = require("express");
const router = express.Router();
const Assistance = require("../models/assistance");

router.post("/", async (req, res) => {
  try {
    res.status(201).json(await new Assistance(req.body).save());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await Assistance.find());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Assistance.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Assistance.findByIdAndDelete(req.params.id);
    res.json({ message: "Bantuan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
