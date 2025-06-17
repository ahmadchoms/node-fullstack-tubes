const express = require("express");
const router = express.Router();
const Recipient = require("../models/recipient");

router.post("/", async (req, res) => {
  try {
    res.status(201).json(await new Recipient(req.body).save());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await Recipient.find().populate("wilayah_id", "nama_wilayah"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Recipient.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Recipient.findByIdAndDelete(req.params.id);
    res.json({ message: "Penerima berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
