const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema(
  {
    _id: Number,
    nama_wilayah: String,
    kecamatan: String,
    kabupaten: String,
    provinsi: String,
  },
  { required: true }
);

module.exports = mongoose.model("Region", regionSchema);
