const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  _id: Number,
  penerima_id: { type: Number, ref: "Recipient", required: true },
  bantuan_id: { type: Number, ref: "Assistance", required: true },
  petugas_id: { type: Number, ref: "Officer", required: true },
  tanggal_distribusi: { type: Date, required: true, default: Date.now },
  jumlah: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Terdistribusi"],
    default: "Pending",
    required: true,
  },
});

module.exports = mongoose.model("Report", reportSchema);
