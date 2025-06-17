const express = require("express");
const router = express.Router();
const Officer = require("../models/officer");

router.post("/", async (req, res) => {
  try {
    res.status(201).json(await new Officer(req.body).save());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await Officer.find().populate("wilayah_id", "nama_wilayah"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Officer.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Officer.findByIdAndDelete(req.params.id);
    res.json({ message: "Officer berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
