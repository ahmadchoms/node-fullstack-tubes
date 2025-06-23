const mongoose = require("mongoose");

const assistanceSchema = new mongoose.Schema({
  _id: Number,
  nama_bantuan: { type: String, required: true },
  kategori: {
    type: String,
    enum: ["Pangan", "Kesehatan", "Pendidikan", "Infrastruktur", "Lainnya"],
    required: true,
  },
  deskripsi: { type: String, required: true },
  nilai: { type: Number, required: true },
});

module.exports = mongoose.model("Assistance", assistanceSchema);
