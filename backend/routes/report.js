const express = require("express");
const router = express.Router();
const Report = require("../models/report");

router.post("/", async (req, res) => {
  try {
    res.status(201).json(await new Report(req.body).save());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(
      await Report.find()
        .populate("penerima_id", "nama")
        .populate("bantuan_id", "nama_bantuan")
        .populate("petugas_id", "nama")
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Report.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Report.findByIdAndDelete(req.params.id);
    res.json({ message: "Laporan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
