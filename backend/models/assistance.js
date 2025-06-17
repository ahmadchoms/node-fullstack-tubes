const mongoose = require("mongoose");

const assistanceSchema = new mongoose.Schema({
  _id: Number,
  nama_bantuan: { type: String, required: true },
  kategori: {
    type: String,
    required: true,
    enum: ["Pangan", "Kesehatan", "Pendidikan", "Infrastruktur", "Lainnya"],
  },
  deskripsi: { type: String, required: true },
  nilai: { type: Number, required: true },
});

module.exports = mongoose.model("Assistance", assistanceSchema);
