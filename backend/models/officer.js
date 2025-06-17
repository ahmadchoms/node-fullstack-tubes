const mongoose = require("mongoose");

const officerSchema = new mongoose.Schema({
  _id: Number,
  nama: { type: String, required: true },
  kontak: {
    telepon: { type: String, required: true },
    email: { type: String, required: true },
  },
  wilayah_id: { type: Number, ref: "Region", required: true },
});

module.exports = mongoose.model("Officer", officerSchema);
