const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  _id: Number,
  nama_wilayah: { type: String, required: true },
  kecamatan: { type: String, required: true },
  kabupaten: { type: String, required: true },
  provinsi: { type: String, required: true },
});

module.exports = mongoose.model("Region", regionSchema);
