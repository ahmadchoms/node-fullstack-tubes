const mongoose = require("mongoose");

const penerimaSchema = new mongoose.Schema({
  _id: Number,
  nama: { type: String, required: true },
  alamat: {
    jalan: { type: String, required: true },
    desa: { type: String, required: true },
    kecamatan: { type: String, required: true },
  },
  nik: { type: String, required: true, unique: true },
  kebutuhan_khusus: { type: [String], default: [] },
  wilayah_id: { type: Number, ref: "Region", required: true },
});

module.exports = mongoose.model("Recipient", penerimaSchema);
